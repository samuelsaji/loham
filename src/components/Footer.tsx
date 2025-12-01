import { Instagram, Facebook, Mail } from 'lucide-react';
import lohamLogo from '@/assets/logo white name.png';

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

// YouTube Icon Component - matches the style of other icons
const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-border bg-void-black px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-baseline">
          {/* Brand */}
          <div className="flex items-baseline">
            <img 
              src={lohamLogo} 
              alt="Loham" 
              // ★★★ THIS IS THE CHANGE ★★★
              // Changed h-8 to h-28 (which is 7rem)
              className="h-16 w-auto" 
            />
          </div>

          {/* Social Links */}
          <div className="flex items-baseline gap-6">
            <a
              href="https://www.instagram.com/lohamdotcom?igsh=cG53MW1vZTYxNG10"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://www.facebook.com/share/1BUCb6Wqx9/?mibextid=wwXIfr"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://wa.me/918714553338?text="
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://youtube.com/@lohamdotcom?si=RwZ00ozfxZmCn9g_"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="YouTube"
            >
              <YouTubeIcon className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="mailto:Loham.app@gmail.com"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Legal & Contact */}
          <div className="flex items-baseline gap-8 font-body text-sm text-metallic-gunmetal">
            <a 
              href="tel:+918714553330"
              className="transition-colors hover:text-metallic-aluminum"
            >
              +91 8714553330
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-body text-xs tracking-widest text-metallic-gunmetal">
            © 2025 LOHAM. ALL RIGHTS RESERVED. DESIGNED BY <a href="https://www.thecodescape.in" className="text-metallic-aluminum transition-colors hover:text-metallic-chrome">CODESCAPE</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
