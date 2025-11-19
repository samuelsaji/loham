import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-metallic.jpg';
import lohamLogo from '@/assets/loham-logo.png';

const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate logo
      if (logoRef.current) {
        gsap.from(logoRef.current, {
          opacity: 0,
          scale: 0.8,
          y: 50,
          duration: 1.5,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 1.2,
          ease: 'power3.out',
        });
      }

      // Pulse scroll indicator
      if (scrollIndicatorRef.current) {
        // --- THIS LINE IS NOW FIXED ---
        // The stray "_" before "gsap.to" has been removed.
        gsap.to(scrollIndicatorRef.current, {
          y: 10,
          opacity: 0.6,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Metallic luxury texture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/60 via-void-black/40 to-void-black" />
      </div>

      {/* Content */}
      {/* Remember to add padding here if the header is overlapping! 
        e.g., pt-28, pt-40, etc.
      */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pt-28"> 
        <img
          ref={logoRef}
          src={lohamLogo}
          alt="Loham - Architectural Metals Simplified"
          className="mb-8 w-full max-w-2xl md:max-w-4xl"
        />
        
        <p
          ref={subtitleRef}
          className="max-w-2xl font-body text-lg tracking-[0.2em] text-metallic-chrome md:text-xl"
        >
        </p>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-widest text-metallic-aluminum">
            SCROLL
          </span>
          <ChevronDown className="h-6 w-6 text-metallic-chrome" />
        </div>
      </div>

      {/* Metallic Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
