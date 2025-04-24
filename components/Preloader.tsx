'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = ({ onFinish }: { onFinish?: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power1.inOut' },
    });

    tl.to('.name-text span', {
      y: 0,
      stagger: 0.05,
      duration: 0.2,
    });

    tl.to('.preloader-item', {
      delay: 1,
      y: '100%',
      duration: 0.5,
      stagger: 0.1,
    });

    // Slide down preloader reveal
    tl.to(
      preloaderRef.current,
      {
        y: '100%',
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          onFinish?.(); // Trigger route to home
        },
      },
      '<0.5'
    );
  }, { scope: preloaderRef });

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white transition-transform"
    >
      <div className="w-12 h-12 bg-teal-400 rounded-full animate-bounce mb-4" />
      <div className="text-xl font-semibold mb-6">{progress}%</div>

      <div className="name-text text-2xl font-bold mb-4">
        {'Loading...'.split('').map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-full opacity-100"
          >
            {letter}
          </span>
        ))}
      </div>

      {/* For GSAP stagger-out effect */}
      <div className="preloader-item text-gray-500"></div>
      <div className="preloader-item text-gray-500"></div>
    </div>
  );
};

export default Preloader;
