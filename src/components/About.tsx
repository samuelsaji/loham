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

    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const getScrollWidth = () =>
        scrollContainer.scrollWidth - section.offsetWidth;

      const horizontalTween = gsap.to(scrollContainer, {
        // Recalculate on refresh to handle mobile viewport/URL-bar changes
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
            // Tie the triggers to the horizontal tween so they sync correctly,
            // especially on mobile.
            containerAnimation: horizontalTween,
            start: 'left right',
            end: 'center center',
            scrub: true,
          },
        });
      });
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
      className="relative h-[80vh] overflow-hidden bg-deep-black md:h-screen"
    >
      <div ref={scrollContainerRef} className="flex h-full" id="horizontal">
        
        {/* Opening Scene */}
        <div
          // CHANGE 1:
          // Changed `items-center` to `items-start`
          // Added `pt-40` to match the other blocks
          // Added `story-block` class for GSAP fade-in
          className="story-block flex h-full min-w-screen items-start justify-center px-12 pt-40 md:px-24"
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
        <div className="relative h-full min-w-screen">
          <img
            src={aboutImage}
            alt="Artisan craftsmanship"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-transparent to-deep-black" />
        </div>

        {/* Story Blocks */}
        {stories.map((story, index) => (
          <div
            key={index}
            // (This block is already correct from last time)
            className="story-block flex h-full min-w-screen items-start justify-center px-12 pt-40 md:px-24"
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
          // CHANGE 2:
          // Changed `items-center` to `items-start`
          // Added `pt-40` to match
          // Added `md:px-24` for consistent padding
          // Added `story-block` class for GSAP fade-in
          className="story-block flex h-full min-w-screen items-start justify-center px-12 pt-40 md:px-24"
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
