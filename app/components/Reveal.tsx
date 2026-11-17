"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";

export default function Reveal({
  className = "",
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setVisible(true);
        } else if (
          !entry.isIntersecting &&
          entry.boundingClientRect.top > window.innerHeight / 2
        ) {
          setVisible(false);
        }
      },
      { threshold: [0, 0.1] },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} reveal${visible ? " visible" : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
