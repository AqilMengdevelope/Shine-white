"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = { before: string; after: string; alt: string; title: string; caption?: boolean; priority?: boolean; intro?: boolean };

/**
 * Before/after comparison. Mouse: the divider follows the pointer on hover.
 * Touch: drag sideways (vertical scrolling still works). Keyboard: arrow keys on the handle.
 * `intro` plays one sweep on load to show the photo is interactive; any pointer or key input cancels it.
 */
export function BeforeAfter({ before, after, alt, title, caption = true, priority = false, intro = false }: Props) {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const stopIntro = useCallback(() => cancelAnimationFrame(raf.current), []);

  useEffect(() => {
    if (!intro || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // 50 -> 88 (mostly dirty) -> 12 (wiped clean) -> 50
    const stops = [50, 88, 12, 50];
    const durations = [700, 1500, 900];
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const begin = performance.now() + 600;
    const tick = (now: number) => {
      let t = now - begin;
      if (t < 0) return void (raf.current = requestAnimationFrame(tick));
      for (let i = 0; i < durations.length; i++) {
        if (t <= durations[i]) {
          setPos(stops[i] + (stops[i + 1] - stops[i]) * ease(t / durations[i]));
          return void (raf.current = requestAnimationFrame(tick));
        }
        t -= durations[i];
      }
      setPos(50);
    };
    raf.current = requestAnimationFrame(tick);
    return stopIntro;
  }, [intro, stopIntro]);

  const moveTo = useCallback((clientX: number) => {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    stopIntro();
    const step = e.shiftKey ? 10 : 4;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  const sizes = "(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 92vw";

  return (
    <figure>
      <div className="border border-line bg-white p-1.5 shadow-card">
        <div
          ref={frame}
          onPointerEnter={stopIntro}
          onPointerMove={(e) => moveTo(e.clientX)}
          onPointerDown={(e) => {
            stopIntro();
            moveTo(e.clientX);
          }}
          className="relative aspect-[3/4] cursor-ew-resize touch-pan-y select-none overflow-hidden bg-tint"
        >
          <Image src={after} alt={`After cleaning: ${alt}`} fill sizes={sizes} priority={priority} className="object-cover" draggable={false} />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image src={before} alt={`Before cleaning: ${alt}`} fill sizes={sizes} priority={priority} className="object-cover" draggable={false} />
          </div>

          <span className="pointer-events-none absolute left-0 top-0 bg-ink/85 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">
            Before
          </span>
          <span className="pointer-events-none absolute right-0 top-0 bg-brand px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white">
            After
          </span>

          <div className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white" style={{ left: `${pos}%` }} />
          <div
            role="slider"
            tabIndex={0}
            aria-label={`${title}: reveal before or after`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% before, ${100 - Math.round(pos)}% after`}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white bg-gold text-ink shadow-card transition-transform duration-200 hover:scale-110"
            style={{ left: `${pos}%` }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
        </div>
      </div>
      {caption && <figcaption className="mt-4 font-display font-bold text-ink">{title}</figcaption>}
    </figure>
  );
}
