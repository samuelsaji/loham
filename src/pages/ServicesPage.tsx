import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import serviceImage from '@/assets/service-bespoke.jpg';
import bespokeImage from '@/assets/service-page/bespoke.jpg';
import atelierImage from '@/assets/service-page/atelier.jpg';
import consultingImage from '@/assets/service-page/consulting.jpg';
import Loader from '@/components/Loader';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  useEffect(() => {
    const handleLoad = () => {
      setWindowLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const imageSources = [serviceImage, bespokeImage, atelierImage, consultingImage];

    const preloadImages = async () => {
      await Promise.all(
        imageSources.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.src = src;
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            }),
        ),
      );

      if (isMounted) {
        setImagesLoaded(true);
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!(windowLoaded && imagesLoaded)) {
    return <Loader />;
  }

  const services = [
    {
      number: '01',
      title: 'Bespoke',
      subtitle: 'Tailored Perfection',
      description:
        'Helping you find the right metal and service providers to suit your imagination and vision.',
      features: [
        'Compare similar products from top brands in seconds.',
        'View pricing, specifications, and warranty details side-by-side.',
        'Explore similar sections across brands through our VR view.',
       
      ],
      image: bespokeImage,
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
      image: atelierImage,
    },
    {
      number: '03',
      title: 'Consulting',
      subtitle: 'Design Intelligence',
      description:
        'We guide you through the nuances of technical specifications offering insights that transform your vision into tangible excellence.',
      features: [
        'Seamless coordination from start to finish',
        'Honest guidance on selecting roofing sheets, windows, doors, handrails, and any other metal sections',
        'Simple clarity on what truly matters for long-lasting quality.',
        'Advice based on your climate, project needs, and budget.',
        
      ],
      image: consultingImage, // Using atelier image as placeholder - you can add consulting.jpg later
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
          From procurement to fabrication, we offer comprehensive suite of services, designed to bring your vision to life with uncompromising quality and artistry
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
