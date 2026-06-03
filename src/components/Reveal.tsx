'use client';

import { type CSSProperties, type ElementType, type ReactNode, useEffect, useRef, useState } from 'react';

type RevealProps = {
  as?: ElementType;
  /** Stagger in ms applied as transition-delay once revealed. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: unknown;
};

/**
 * Scroll-reveal wrapper: renders with `.reveal` and adds `.in` when it first
 * intersects the viewport. Respects prefers-reduced-motion via the CSS (which
 * forces `.reveal` visible). Re-expresses the prototype's IntersectionObserver.
 */
export function Reveal({ as: Tag = 'div', delay, className = '', style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            setInView(true);
            io.unobserve(en.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} reveal${inView ? ' in' : ''}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
