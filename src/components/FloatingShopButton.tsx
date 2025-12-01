import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

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
          label: 'WhatsApp',
          href: 'https://wa.me/918714553338?text=',
          icon: WhatsAppIcon,
          showLabel: false, // Don't show label at all
        },
        {
          label: 'Shop',
          href: 'https://loham.app',
          icon: ShoppingBag,
          showLabel: true,
          showLabelAlways: true,
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
          {action.showLabel !== false && (
            <span 
              className={`pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-full border border-metallic-chrome/30 bg-void-black/90 px-2 py-1 text-[0.6rem] font-body uppercase tracking-[0.3em] text-metallic-aluminum transition-all duration-200 lg:mr-3 lg:block ${
                action.showLabelAlways 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              }`}
            >
              {action.label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
};

export default FloatingShopButton;

