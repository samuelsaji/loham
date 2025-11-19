import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import lohamLogo from '@/assets/logo white name.png';

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
              href="#"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="mailto:info@loham.com"
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
              href="tel:+1234567890"
              className="transition-colors hover:text-metallic-aluminum"
            >
              +91 1234 567 890
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
