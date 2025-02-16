import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function ImageGallery() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleToggleGallery = (e: CustomEvent<boolean>) => {
      setIsVisible(e.detail);
    };

    window.addEventListener('toggleGallery', handleToggleGallery as EventListener);
    return () => {
      window.removeEventListener('toggleGallery', handleToggleGallery as EventListener);
    };
  }, []);

  // Using themed placeholder images that match our hacker aesthetic
  const images = [
    "https://placehold.co/400x300/0a0a0a/00ff00?text=Happy+Birthday+Fauzan",
    "https://placehold.co/400x300/0a0a0a/00ff00?text=Keep+Coding+%F0%9F%92%BB",
    "https://placehold.co/400x300/0a0a0a/00ff00?text=Best+Wishes+2024+%F0%9F%8E%89"
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 }
                }}
              >
                <Card className="overflow-hidden border-green-500/50 hover:border-green-400 transition-colors duration-300">
                  <div className="relative group">
                    <img
                      src={src}
                      alt={`Birthday Memory ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-green-400 font-mono">MEMORY_FRAGMENT_{index + 1}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}