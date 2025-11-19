import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import edgeImage from '@/assets/bg/1.jpg';
import qualityImage from '@/assets/bg/2.jpg';
import innovationImage from '@/assets/bg/3.jpg';
import transparencyImage from '@/assets/bg/4.jpg';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: 'Our Edge',
      description:
        'Combining technology, trusted partners, and competitive sourcing to simplify and streamline every aspect of architectural procurement and supply.',
      image: edgeImage,
    },
    {
      title: 'Quality',
      description:
        'Backed by certified vendors and precision standards, Loham ensures unmatched quality in every metal, every order, every time.',
      image: qualityImage,
    },
    {
      title: 'Innovation',
      description:
        'Leveraging technology and market insights, Loham continuously evolves to deliver smarter, faster, and more sustainable metal solutions.',
      image: innovationImage,
    },
    {
      title: 'Transparency',
      description:
        'Every interaction is built on honesty, visibility, and accountability, ensuring total trust in every deal.',
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
            className="relative w-full mb-8 min-h-[10rem] md:min-h-[12rem]"
          >
            {services.map((service, index) => (
              <h2
                key={index}
                className="absolute left-0 top-0 w-full text-center font-display text-6xl font-bold text-primary transition-all duration-700"
                style={{
                  transform: `translateY(${(activeIndex - index) * -100}%)`,
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                {service.title}
              </h2>
            ))}
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
      </div>
    </section>
  );
};

export default Services;
