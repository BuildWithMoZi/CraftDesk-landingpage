"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/metadata";
import { assetPath } from "@/lib/paths";

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
            className='absolute inset-0 h-full w-full object-cover'
          />

          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className='absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-10 md:pb-14'>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
