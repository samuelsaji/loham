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
      // Unified vertical scroll experience for all viewports
      const textBlocks = scrollContainer.querySelectorAll('.story-block');
      textBlocks.forEach((block) => {
        gsap.from(block, {
          opacity: 0,
          y: 60,
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        });
      });

      // Subtle fade / lift on the image panel
      const imagePanel = scrollContainer.querySelector('.image-panel');
      if (imagePanel) {
        gsap.from(imagePanel, {
          opacity: 0,
          y: 40,
          scrollTrigger: {
            trigger: imagePanel,
            start: 'top 85%',
            end: 'top 60%',
            scrub: true,
          },
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
      className="relative bg-deep-black py-16 md:py-24"
    >
      <div
        ref={scrollContainerRef}
        className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-start md:gap-24"
      >
        {/* Left column – Story content */}
        <div
          className="flex-1 space-y-16"
        >
          {/* Opening Scene */}
          <div className="story-block">
            <div className="max-w-2xl">
              <h2 className="mb-6 font-display text-4xl font-bold text-primary md:text-6xl">
                The Story
              </h2>
              <p className="font-body text-lg leading-relaxed text-metallic-aluminum md:text-xl">
                Turning proven expertise into purposeful innovation.
              </p>
            </div>
          </div>

          {/* Story Blocks */}
          <div className="space-y-12">
            {stories.map((story, index) => (
              <div key={index} className="story-block">
                <div className="max-w-xl">
                  <div className="mb-4 h-px w-20 bg-gradient-metallic" />
                  <h3 className="mb-4 font-display text-3xl font-semibold text-primary md:text-4xl">
                    {story.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed text-metallic-aluminum md:text-lg">
                    {story.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="story-block">
            <p className="max-w-xl font-display text-xl italic text-metallic-chrome md:text-2xl">
              "We don’t just trade metals; we forge relationships built on trust, transparency, and transformative innovation."
            </p>
          </div>
        </div>

        {/* Right column – Image panel */}
        <div className="image-panel relative mt-6 h-80 overflow-hidden rounded-3xl border border-metallic-steel/40 md:mt-0 md:h-[480px] md:w-[420px] md:flex-shrink-0 md:sticky md:top-32">
          <img
            src={aboutImage}
            alt="Artisan craftsmanship"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-deep-black/40" />
        </div>
      </div>
    </section>
  );
};

export default About;
