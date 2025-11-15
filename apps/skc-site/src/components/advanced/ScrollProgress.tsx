'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-skc origin-left z-50"
      style={{ scaleX }}
    />
  );
}

// Reading progress variant with percentage
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-50">
      <motion.div
        className="h-full bg-gradient-skc relative"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      >
        {progress > 5 && (
          <span className="absolute right-2 top-2 text-xs text-white bg-skc-red px-2 py-0.5 rounded-full">
            {Math.round(progress)}%
          </span>
        )}
      </motion.div>
    </div>
  );
}
