import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import lohamLogo from '@/assets/logo white name.png';

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for all resources to load
    const handleLoad = () => {
      // Small delay for smooth transition
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Fade out animation
      gsap.to('.loader-container', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          const loader = document.querySelector('.loader-container');
          if (loader) {
            loader.style.display = 'none';
          }
        },
      });
    }
  }, [isLoaded]);

  useEffect(() => {
    // Animate the logo with a subtle pulse and fade
    const logo = document.querySelector('.loader-logo-img');
    if (logo) {
      gsap.to(logo, {
        opacity: 0.6,
        scale: 0.95,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }
  }, []);

  return (
    <div className="loader-container fixed inset-0 z-[9999] flex items-center justify-center bg-void-black">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-void-black via-deep-black to-void-black opacity-90" />
      
      {/* Logo Animation */}
      <div className="relative flex items-center justify-center">
        <img
          src={lohamLogo}
          alt="Loham"
          className="loader-logo-img h-24 w-auto opacity-100 transition-opacity md:h-32"
        />
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center">
        <p className="font-body text-sm tracking-[0.3em] text-metallic-aluminum">
          LOADING
        </p>
        <div className="mt-4 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-1 w-1 rounded-full bg-gradient-metallic"
              style={{
                animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animation for dots */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;

