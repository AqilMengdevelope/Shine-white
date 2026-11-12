"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: number; suffix?: string; duration?: number };

/** Counts up from 0 to `value` the first time it scrolls into view. */
export function Counter({ value, suffix = "", duration = 1800 }: Props) {
  const [shown, setShown] = useState(value); // server render shows the final number
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          setShown(Math.round(value * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setShown(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums" aria-label={`${value.toLocaleString("en-MY")}${suffix}`}>
      <span aria-hidden="true">
        {shown.toLocaleString("en-MY")}
        {suffix && <span className="text-gold">{suffix}</span>}
      </span>
    </span>
  );
}
