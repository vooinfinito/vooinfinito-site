import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-voo">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_7dbc7dad-ee53-4964-9942-854b36634562/artifacts/s4eh1nm4_Logotipo%20-%20VOO%20INFINITO_1.png" 
              alt="Vôo Infinito" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="btn-primary"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="nav-link text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="nav-link text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="nav-link text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="nav-link text-left"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="btn-primary w-full justify-center mt-4"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;