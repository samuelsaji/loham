import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import edgeImage from '@/assets/bg/1.jpg';
import qualityImage from '@/assets/bg/2.jpg';
import innovationImage from '@/assets/bg/3.jpg';
import transparencyImage from '@/assets/bg/4.jpg';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: 'Edge',
      description:
        'We help you simplify the procurement and services of architectural metals by combining technologies, trusted partners and competitive sourcing locally and globally, giving you a fast, seamless, and effortless experience from enquiry to delivery',
      image: edgeImage,
    },
    {
      title: 'Innovation',
      description:
        'Instantly compare top-brand products with transparent pricing, specs, and warranty details.leveraging technologies and market insights , Loham helps you simplify complex purchase decisions by clear simple and honest product comparison',
      image: qualityImage,
    },
    {
      title: 'Quality',
      description:
        'Backed by certified vendors , tested and precision standards, Loham ensures , unmatched quality in every metal, every order, every time',
      image: innovationImage,
    },
    {
      title: 'Transparency',
      description:
        'Every order is met with honesty, accountability and integrity ensuring total trust in every transaction',
      image: transparencyImage,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${services.length * window.innerHeight}`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const newIndex = Math.min(
            Math.floor(self.progress * services.length),
            services.length - 1
          );
          setActiveIndex(newIndex);
        },
      });

      // Animate scroll indicator
      if (scrollIndicatorRef.current) {
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
  }, [services.length]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-void-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: activeIndex === index ? 1 : 0 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-void-black/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center"
      >
        <div
          // This main container stays wide (max-w-6xl)
          className="max-w-6xl text-center px-6 md:px-12 w-full"
        >
          
          {/* Service Title */}
          <div
            className="relative w-full mb-8 min-h-[10rem] md:min-h-[12rem] flex items-baseline justify-center"
          >
            {/* Static "Our" text */}
            <span className="font-display text-6xl font-bold text-primary leading-none md:text-7xl">
              Our
            </span>
            <span className="inline-block w-4"></span>
            {/* Rotating second word */}
            <div className="relative inline-block min-w-[200px] md:min-w-[300px] leading-none">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="absolute left-0 font-display text-6xl font-bold text-primary leading-none transition-all duration-700 md:text-7xl"
                  style={{
                    transform: `translateY(${(activeIndex - index) * -100}%)`,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                >
                  {service.title}
                </span>
              ))}
              {/* Invisible placeholder to maintain height */}
              <span className="invisible font-display text-6xl font-bold md:text-7xl">
                {services[0].title}
              </span>
            </div>
          </div>

          {/* Service Description */}
          <div
            // *** THIS IS THE FIX ***
            // Updated to max-w-5xl for a much wider paragraph block.
            className="relative w-full mb-12 min-h-[9rem] max-w-5xl mx-auto"
          >
            {services.map((service, index) => (
              <p
                key={index}
                className="absolute inset-0 font-body text-lg leading-relaxed text-metallic-aluminum transition-opacity duration-700 md:text-xl"
                style={{ opacity: activeIndex === index ? 1 : 0 }}
              >
                {service.description}
              </p>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3">
            {services.map((_, index) => (
              <div
                key={index}
                className="h-1 w-16 overflow-hidden bg-muted"
              >
                <div
                  className="h-full bg-gradient-metallic transition-all duration-700"
                  style={{
                    width: activeIndex === index ? '100%' : '0%',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Service Counter */}
          <div className="mt-8 font-body text-sm tracking-widest text-metallic-gunmetal">
            {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-widest text-metallic-aluminum">
            SCROLL
          </span>
          <ChevronDown className="h-6 w-6 text-metallic-chrome" />
        </div>
      </div>
    </section>
  );
};

export default Services;
