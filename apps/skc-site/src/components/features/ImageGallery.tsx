'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <>
      {/* Gallery grid */}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="glass-card overflow-hidden cursor-pointer group"
            whileHover={{ y: -8 }}
            onClick={() => openLightbox(image, index)}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <motion.div
                  className="opacity-0 group-hover:opacity-100 text-white text-4xl"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  🔍
                </motion.div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm">{image.title}</h3>
              {image.description && (
                <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                  {image.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-skc-red transition-colors z-10"
              onClick={closeLightbox}
            >
              ✕
            </button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-skc-red transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  ‹
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-skc-red transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  ›
                </button>
              </>
            )}

            {/* Image container */}
            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>

              {/* Image info */}
              <div className="glass-card p-6 mt-4">
                <h3 className="text-xl font-medium mb-2">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-text-secondary">{selectedImage.description}</p>
                )}
                <div className="text-sm text-text-tertiary mt-4">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
