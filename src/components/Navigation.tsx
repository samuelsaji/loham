import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Correct import for navigation
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/services', label: 'SERVICES' },
    { to: 'https://loham.app', label: 'SHOP' },
  ];

  return (
    <nav
      className="
        absolute top-0 left-0 right-0 z-50 
      "
      // This is now fully transparent, with no blur or shadow.
    >
      <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-6 md:px-12">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              // The `end` prop ensures the "HOME" link is only active
              // when the path is exactly "/", not for "/services"
              end={link.to === '/'} 
              className="font-body text-sm tracking-widest text-metallic-aluminum transition-colors hover:text-primary"
              // Replaced 'activeClassName' with React Router 6's 
              // functional syntax for simplicity and correctness.
              style={({ isActive }) => ({
                color: isActive ? 'var(--color-primary)' : undefined,
                // Assuming 'text-primary' uses a CSS variable like --color-primary.
                // If 'text-primary' is a Tailwind class, you'd do:
                // className={({ isActive }) =>
                //   `${baseClassName} ${isActive ? 'text-primary' : ''}`
                // }
                // Let's use the className approach, it's cleaner.
              })}
            >
              {({ isActive }) => (
                <span 
                  className={`font-body text-sm tracking-widest transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-metallic-aluminum'
                  }`}
                >
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-void-black/98 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                to={link.to}
                end={link.to === '/'}
              >
                {({ isActive }) => (
                  <span 
                    className={`font-body text-lg tracking-widest transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-metallic-aluminum'
                    }`}
                  >
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
