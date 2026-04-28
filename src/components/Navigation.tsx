import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Componente Navigation - Barra de navegación principal
 * Incluye logo, menú de navegación y botón CTA
 */
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Automatización', href: '#automatizacion' },
    // { label: 'Extracción de Datos', href: '#scraping' },
    { label: 'E-commerce', href: '#ecommerce' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black-pearl/95 backdrop-blur-md border-b border-slate-700/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/icon_512x512.png" 
              alt="Katrix Logo" 
              className="w-10 h-10 rounded-lg object-contain mr-3"
            />
            <h1 className="text-2xl font-bold tracking-tight gradient-accent bg-clip-text text-transparent font-mono">
              Katrix
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-sm font-medium text-pearl-bush/80 hover:text-blue-chill transition-all duration-300 rounded-lg hover:bg-blue-chill/10 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-chill/20 to-surfie-green/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
          
          {/* CTA Button - Separated for better positioning */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#contacto')}
              className="modern-btn-primary group text-sm px-6 py-2.5"
            >
              Iniciar conversación
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-pearl-bush hover:text-blue-chill transition-all duration-300 hover:bg-blue-chill/10 rounded-lg"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black-pearl/95 backdrop-blur-xl border-t border-blue-chill/20">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-pearl-bush hover:text-blue-chill transition-all duration-300 rounded-lg hover:bg-blue-chill/10"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contacto')}
                className="modern-btn-primary group w-full text-sm px-6 py-3 mt-4"
              >
                Iniciar conversación
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;