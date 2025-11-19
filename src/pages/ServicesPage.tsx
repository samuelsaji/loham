import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import serviceImage from '@/assets/service-bespoke.jpg';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      gsap.from(hero.querySelectorAll('.hero-text'), {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      number: '01',
      title: 'Bespoke',
      subtitle: 'Tailored Perfection',
      description:
        'Tailored exclusively to your vision. Each bespoke piece is a collaboration between your imagination and our mastery, resulting in artifacts that are unmistakably yours.',
      features: [
        'Personal consultation and design briefing',
        'Unlimited design iterations',
        'Premium material selection',
        'Handcrafted by master artisans',
        'Lifetime authenticity guarantee',
      ],
      image: serviceImage,
    },
    {
      number: '02',
      title: 'Atelier',
      subtitle: 'Creative Sanctuary',
      description:
        'Step into our creative sanctuary. The atelier is where concepts take physical form, where sketches become reality through the alchemy of skilled hands and refined materials.',
      features: [
        'Private workshop tours',
        'Meet the artisans behind your piece',
        'Observe traditional techniques',
        'Experience the craft firsthand',
        'Exclusive atelier sessions',
      ],
      image: serviceImage,
    },
    {
      number: '03',
      title: 'Consulting',
      subtitle: 'Design Intelligence',
      description:
        'Strategic design intelligence. We guide brands and collectors through the nuanced landscape of luxury aesthetics, offering insight that transforms vision into tangible excellence.',
      features: [
        'Brand aesthetic development',
        'Collection curation',
        'Material sourcing expertise',
        'Design trend forecasting',
        'Strategic creative partnerships',
      ],
      image: serviceImage,
    },
  ];

  return (
    <main className="overflow-x-hidden bg-void-black">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center px-6 pt-24 md:px-12"
      >
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt="Services"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void-black via-void-black/80 to-void-black" />
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="hero-text mb-6 font-display text-6xl font-bold text-primary md:text-8xl lg:text-9xl">
            Our Services
          </h1>
          <p className="hero-text max-w-2xl mx-auto font-body text-lg leading-relaxed text-metallic-aluminum md:text-xl">
            From concept to creation, we offer a comprehensive suite of services designed to bring your vision to life with uncompromising quality and artistry.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-black to-transparent" />
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <ServiceDetailSection key={index} service={service} index={index} />
      ))}

      <Contact />
      <Footer />
    </main>
  );
};

const ServiceDetailSection = ({
  service,
  index,
}: {
  service: any;
  index: number;
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.animate-in'), {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid items-center gap-12 md:grid-cols-2 ${
            isEven ? '' : 'md:grid-flow-dense'
          }`}
        >
          {/* Image */}
          <div className={`animate-in ${isEven ? '' : 'md:col-start-2'}`}>
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void-black/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
            <div className="animate-in mb-4 font-body text-6xl font-bold text-metallic-gunmetal md:text-8xl">
              {service.number}
            </div>
            <h2 className="animate-in mb-3 font-display text-5xl font-bold text-primary md:text-7xl">
              {service.title}
            </h2>
            <h3 className="animate-in mb-6 font-body text-xl tracking-widest text-metallic-chrome md:text-2xl">
              {service.subtitle}
            </h3>
            <div className="animate-in mb-8 h-px w-24 bg-gradient-metallic" />
            <p className="animate-in mb-12 font-body text-base leading-relaxed text-metallic-aluminum md:text-lg">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-4">
              {service.features.map((feature: string, idx: number) => (
                <li
                  key={idx}
                  className="animate-in flex items-start gap-3 font-body text-sm text-metallic-aluminum"
                >
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 bg-gradient-metallic" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      {index < 2 && (
        <div className="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-metallic-gunmetal to-transparent" />
      )}
    </section>
  );
};

export default ServicesPage;
