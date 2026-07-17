"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandName, Logo } from "@/components/ui/brand-name";
import { siteConfig } from "@/lib/metadata";
import { assetPath } from "@/lib/paths";

interface LoadingScreenProps {
  onComplete: () => void;
}

const MIN_DISPLAY_MS = 1200;
const MAX_DISPLAY_MS = 5000;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onCompleteRef = useRef(onComplete);
  const startTimeRef = useRef(Date.now());
  const completedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const finishLoading = () => {
    if (completedRef.current) return;
    completedRef.current = true;

    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, (isMobile ? 900 : MIN_DISPLAY_MS) - elapsed);

    setProgress(100);
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        onCompleteRef.current();
      }, 300);
    }, remaining);
  };

  useEffect(() => {
    const video = videoRef.current;
    let progressInterval: ReturnType<typeof setInterval> | null = null;
    const maxDisplayMs = isMobile ? 2400 : MAX_DISPLAY_MS;
    const tickMs = isMobile ? 10 : 8;
    const maxTimeout = setTimeout(finishLoading, maxDisplayMs);

    const startProgress = () => {
      if (progressInterval) return;
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const next = Math.min(prev + 1, 100);
          if (next >= 100) {
            if (progressInterval) {
              clearInterval(progressInterval);
            }
            finishLoading();
          }
          return next;
        });
      }, tickMs);
    };

    const handleVideoError = () => startProgress();

    const tryPlay = async () => {
      if (!video) return;
      try {
        video.currentTime = 0;
        await video.play();
      } catch {
        startProgress();
      }
    };

    startProgress();

    if (video) {
      video.addEventListener("error", handleVideoError);
      if (video.readyState >= 2) {
        void tryPlay();
      } else {
        video.addEventListener("loadeddata", tryPlay, { once: true });
        video.addEventListener("canplay", tryPlay, { once: true });
      }
    }

    return () => {
      clearTimeout(maxTimeout);
      if (video) {
        video.removeEventListener("error", handleVideoError);
      }
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isMobile]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='fixed inset-0 z-[200] flex flex-col items-center overflow-hidden bg-black'
          aria-label={`Loading ${siteConfig.name}`}
          role='progressbar'
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}>
          <video
            ref={videoRef}
            src={assetPath("/loader-video.mp4")}
            muted
            playsInline
            autoPlay
            preload='auto'
            className='absolute inset-0 h-full w-full object-cover hidden md:block'
          />

          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className='absolute inset-x-0 bottom-0 z-10 hidden px-6 pb-10 md:block md:px-10 md:pb-14'>
            <div className='mx-auto w-full max-w-2xl md:max-w-3xl'>
              <div className='mb-3 flex items-end justify-between'>
                <span className='text-sm font-semibold uppercase tracking-widest text-zinc-300 md:text-base'>
                  Loading
                </span>
                <span className='font-brand text-3xl font-bold tabular-nums text-orange-400 md:text-4xl'>
                  {Math.round(progress)}%
                </span>
              </div>
              <div className='h-3 overflow-hidden rounded-full bg-white/15 backdrop-blur-sm md:h-4'>
                <div
                  className='h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-amber-400 shadow-[0_0_32px_rgba(249,115,22,0.8)] transition-[width] duration-200 ease-linear'
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className='absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center md:hidden'>
            <Logo size={52} className='mb-1' />
            <BrandName variant='mark' className='text-xl tracking-[0.24em]' />
            <span className='text-xs uppercase tracking-[0.32em] text-zinc-300'>
              Loading
            </span>
            <span className='font-brand text-3xl font-bold text-orange-400 tabular-nums'>
              {Math.round(progress)}%
            </span>
            <div className='w-full max-w-[260px] overflow-hidden rounded-full bg-white/10 backdrop-blur-sm'>
              <div
                className='h-2 rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-amber-400 shadow-[0_0_28px_rgba(249,115,22,0.75)] transition-[width] duration-200 ease-linear'
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
