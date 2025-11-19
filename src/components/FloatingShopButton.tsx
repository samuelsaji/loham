import { useEffect, useState } from 'react';
import { ShoppingBag, Mail } from 'lucide-react';

const SCROLL_THRESHOLD = 200;

const FloatingShopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-16 right-3 z-50 flex flex-col items-center gap-3 sm:gap-4">
      <span className="h-16 w-px bg-gradient-to-t from-metallic-chrome/70 via-metallic-gunmetal/40 to-transparent sm:h-24" />
      {[
        {
          label: 'Shop',
          href: 'https://loham.app',
          icon: ShoppingBag,
        },
        {
          label: 'Contact',
          href: '#contact',
          icon: Mail,
        },
      ].map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.href.startsWith('http') ? '_blank' : undefined}
          rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-void-black/80 text-metallic-aluminum ring-1 ring-metallic-chrome/40 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:text-primary sm:h-12 sm:w-12"
          aria-label={action.label}
        >
          <action.icon className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-full border border-metallic-chrome/30 bg-void-black/90 px-2 py-1 text-[0.6rem] font-body uppercase tracking-[0.3em] text-metallic-aluminum opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 lg:mr-3 lg:block">
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingShopButton;

