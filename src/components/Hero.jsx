import React, { useState, useEffect } from 'react';
import { ArrowDown, Play } from 'lucide-react';
import { mockData } from '../mock';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { company, heroImages } = mockData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-section">
      {/* Single Background Image with Transition */}
      <div 
        className="hero-background transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-cyan-900/65 z-1"></div>

      <div className="container-voo hero-content">
        {/* Hero Subtitle */}
        <div className="hero-subtitle animate-fade-in-up mb-4 text-cyan-300">
          {company.tagline}
        </div>

        {/* Hero Title */}
        <h1 className="hero-title animate-fade-in-up mb-6">
          {company.slogan}
        </h1>

        {/* Hero Description */}
        <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up">
          <p className="body-text text-white bg-slate-900/80 backdrop-blur-md rounded-xl px-6 py-4 shadow-xl border border-white/20">
            {company.description}
          </p>
        </div>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <button 
            onClick={() => scrollToSection('contato')}
            className="btn-primary"
          >
            Solicitar Orçamento
          </button>
          
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
          >
            <Play size={18} />
            Ver Portfolio
          </button>
        </div>

        {/* Image Indicators - moved inside hero-content */}
        <div className="flex justify-center space-x-2 mt-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('servicos')}
            className="animate-bounce text-white/70 hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;