"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandName, Logo } from "@/components/ui/brand-name";
import { siteConfig } from "@/lib/metadata";

interface LoadingScreenProps {
  onComplete: () => void;
}

const MIN_DISPLAY_MS = 2800;
const MAX_DISPLAY_MS = 12000;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onCompleteRef = useRef(onComplete);
  const startTimeRef = useRef(Date.now());
  const completedRef = useRef(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const finishLoading = () => {
    if (completedRef.current) return;
    completedRef.current = true;

    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

    setProgress(100);
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        onCompleteRef.current();
      }, 500);
    }, remaining);
  };

  useEffect(() => {
    const video = videoRef.current;
    let fallbackInterval: ReturnType<typeof setInterval> | null = null;
    const maxTimeout = setTimeout(finishLoading, MAX_DISPLAY_MS);

    const handleTimeUpdate = () => {
      if (!video?.duration || !isFinite(video.duration)) return;
      const pct = Math.min((video.currentTime / video.duration) * 100, 100);
      setProgress(pct);
    };

    const handleEnded = () => finishLoading();

    const startFallbackProgress = () => {
      if (fallbackInterval) return;
      fallbackInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (fallbackInterval) clearInterval(fallbackInterval);
            finishLoading();
            return 100;
          }
          return prev + 1;
        });
      }, 80);
    };

    const handleVideoError = () => startFallbackProgress();

    const tryPlay = async () => {
      if (!video) return;
      try {
        video.currentTime = 0;
        await video.play();
      } catch {
        startFallbackProgress();
      }
    };

    if (video) {
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("ended", handleEnded);
      video.addEventListener("error", handleVideoError);

      if (video.readyState >= 2) {
        void tryPlay();
      } else {
        video.addEventListener("loadeddata", tryPlay, { once: true });
        video.addEventListener("canplay", tryPlay, { once: true });
      }
    } else {
      startFallbackProgress();
    }

    return () => {
      clearTimeout(maxTimeout);
      if (video) {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("error", handleVideoError);
      }
      if (fallbackInterval) clearInterval(fallbackInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-black'
          aria-label={`Loading ${siteConfig.name}`}
          role='progressbar'
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}>
          <video
            ref={videoRef}
            src='/loader-video.mp4'
            muted
            playsInline
            autoPlay
            preload='auto'
            className='absolute inset-0 h-full w-full object-cover'
          />

          <div className='absolute inset-0 bg-black/50' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60' />
          <div className='pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[150px]' />

          <div className='relative z-10 flex flex-col items-center px-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className='mb-12 flex flex-col items-center gap-4'>
              <div className='relative flex items-center gap-4'>
                <div className='absolute -inset-6 rounded-full bg-orange-500/20 blur-2xl animate-pulse' />
                <Logo
                  size={64}
                  priority
                  className='relative h-16 w-16 drop-shadow-[0_0_30px_rgba(249,115,22,0.5)] md:h-20 md:w-20'
                />
                <h1 className='relative'>
                  <BrandName variant='full' />
                </h1>
              </div>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='font-brand text-sm font-medium uppercase tracking-[0.25em] text-orange-400 md:text-base'>
                {siteConfig.tagline}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className='w-full max-w-sm md:max-w-md'>
              <div className='mb-2 flex justify-between text-xs font-medium text-zinc-400'>
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className='h-2 overflow-hidden rounded-full bg-white/10 backdrop-blur-sm'>
                <div
                  className='h-full rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-amber-400 shadow-[0_0_24px_rgba(249,115,22,0.7)] transition-[width] duration-200 ease-linear'
                  style={{ width: `${progress}%` }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
