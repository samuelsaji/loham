import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '@/assets/about-craft.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    // Check if mobile (viewport width < 768px)
    const checkMobile = () => window.innerWidth < 768;
    const isMobile = checkMobile();

    const ctx = gsap.context(() => {
      if (isMobile) {
        // On mobile: Simple fade-in animations without horizontal scroll
        const textBlocks = scrollContainer.querySelectorAll('.story-block');
        textBlocks.forEach((block) => {
          gsap.from(block, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
            },
          });
        });

        // Fade in image panel
        const imagePanel = scrollContainer.querySelector('.image-panel');
        if (imagePanel) {
          gsap.from(imagePanel, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
              trigger: imagePanel,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true,
            },
          });
        }
      } else {
        // Desktop: Horizontal scroll animation
        const getScrollWidth = () =>
          scrollContainer.scrollWidth - section.offsetWidth;

        const horizontalTween = gsap.to(scrollContainer, {
          x: () => -getScrollWidth(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            end: () => `+=${getScrollWidth()}`,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Fade in text blocks as they come into view
        const textBlocks = scrollContainer.querySelectorAll('.story-block');
        textBlocks.forEach((block) => {
          gsap.from(block, {
            opacity: 0,
            x: 100,
            scrollTrigger: {
              trigger: block,
              containerAnimation: horizontalTween,
              start: 'left right',
              end: 'center center',
              scrub: true,
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const stories = [
    {
      title: 'Heritage',
      text: (
        <>
         Built on decades of experience, our teambringstrusted reliability, technical skill, and consistentquality to every metal solution we deliver.
        </>
      ),
    },
    {
      title: 'Philosophy',
      text: 'Driven by integrity, innovation, and uncompromising quality to empower clients through reliable, transparent metal solutions.',
    },
    {
      title: 'Loham',
      text: 'Connecting global vendors and service providers with customers, consultants, and developers.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-deep-black md:h-screen md:overflow-hidden"
    >
      <div ref={scrollContainerRef} className="flex flex-col md:flex-row md:h-full" id="horizontal">
        
        {/* Opening Scene */}
        <div
          className="story-block flex items-start justify-center px-12 py-12 md:h-full md:min-w-screen md:px-24 md:pt-40"
        >
          <div className="max-w-2xl">
            <h2 className="mb-8 font-display text-5xl font-bold text-primary md:text-7xl">
              The Story
            </h2>
            <p className="font-body text-lg leading-relaxed text-metallic-aluminum md:text-xl">
            Turning proven expertise into purposeful innovation.
            </p>
          </div>
        </div>

        {/* Image Panel */}
        <div className="image-panel relative min-h-[40vh] md:h-full md:min-w-screen">
          <img
            src={aboutImage}
            alt="Artisan craftsmanship"
            className="h-full min-h-[40vh] w-full object-cover md:min-h-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-transparent to-deep-black" />
        </div>

        {/* Story Blocks */}
        {stories.map((story, index) => (
          <div
            key={index}
            className="story-block flex items-start justify-center px-12 py-12 md:h-full md:min-w-screen md:px-24 md:pt-40"
          >
            <div className="max-w-xl">
              <div className="mb-6 h-px w-24 bg-gradient-metallic" />
              <h3 className="mb-6 font-display text-4xl font-semibold text-primary md:text-6xl">
                {story.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-metallic-aluminum md:text-lg">
                {story.text}
              </p>
            </div>
          </div>
        ))}

        {/* Closing */}
        <div
          className="story-block flex items-start justify-center px-12 py-12 md:h-full md:min-w-screen md:px-24 md:pt-40"
        >
          <p className="max-w-md text-center font-display text-2xl italic text-metallic-chrome md:text-3xl">
            "We don’t just trade metals; we forge relationships built on trust, transparency, and transformative innovation."
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
