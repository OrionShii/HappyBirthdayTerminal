import { useEffect } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import TerminalInterface from '@/components/TerminalInterface';
import ImageGallery from '@/components/ImageGallery';

export default function Terminal() {
  useEffect(() => {
    document.title = "Terminal Interface > Happy Birthday Fauzan!";
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-green-500 relative overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <TerminalInterface />
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}
