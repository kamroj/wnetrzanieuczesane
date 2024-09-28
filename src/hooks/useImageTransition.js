import { useState, useCallback, useEffect } from 'react';

export const useImageTransition = (images, transitionDuration = 1000, interval = 5000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transition = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, transitionDuration);
  }, [images.length, transitionDuration]);

  useEffect(() => {
    const timer = setInterval(transition, interval);
    return () => clearInterval(timer);
  }, [transition, interval]);

  const nextIndex = (currentIndex + 1) % images.length;

  return { currentIndex, nextIndex, isTransitioning };
};