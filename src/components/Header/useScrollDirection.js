import { useEffect, useRef, useState } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else if (scrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return scrollDirection;
}
