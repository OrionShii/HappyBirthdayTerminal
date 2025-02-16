import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function ImageGallery() {
  const [isVisible, setIsVisible] = useState(false);

  // Using placeholder images since we can't generate actual images
  const images = [
    "https://placehold.co/300x200/1a1a1a/00ff00?text=Happy+Birthday",
    "https://placehold.co/300x200/1a1a1a/00ff00?text=Fauzan",
    "https://placehold.co/300x200/1a1a1a/00ff00?text=2024"
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {images.map((src, index) => (
            <Card
              key={index}
              className="overflow-hidden border-green-500/50"
            >
              <img
                src={src}
                alt={`Birthday Memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </Card>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
