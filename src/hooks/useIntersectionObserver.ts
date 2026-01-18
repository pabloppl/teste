import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: UseIntersectionObserverOptions = {}
): boolean {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    // Freeze in `true` state if we're already visible
    const frozen = freezeOnceVisible && isIntersecting;

    if (!element || frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [
    elementRef,
    threshold,
    root,
    rootMargin,
    freezeOnceVisible,
    isIntersecting,
  ]);

  return isIntersecting;
}
