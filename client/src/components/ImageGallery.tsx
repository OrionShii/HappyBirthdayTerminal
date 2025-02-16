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

  // Add your images to the public/images folder and update these paths
  const images = [
    {
      url: "/images/birthday_photo.jpg",
      caption: "Celebrating Another Year! 🎉"
    },
    {
      url: "/images/coding_memories.jpg",
      caption: "Coding Adventures Continue! 💻"
    },
    {
      url: "/images/future_goals.jpg",
      caption: "Here's to New Beginnings! 🎈"
    }
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
            {images.map((image, index) => (
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
                      src={image.url}
                      alt={`Birthday Memory ${index + 1}`}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-green-400 font-mono text-center px-4">{image.caption}</span>
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