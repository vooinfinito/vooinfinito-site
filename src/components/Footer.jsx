import React from 'react';
import { Phone, Mail, Instagram, MapPin, ArrowUp } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  const { company } = mockData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      
      {/* Main Footer Content */}
      <div className="container-voo py-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_7dbc7dad-ee53-4964-9942-854b36634562/artifacts/s4eh1nm4_Logotipo%20-%20VOO%20INFINITO_1.png" 
                alt="Vôo Infinito" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              {company.description}
            </p>

            <div className="flex space-x-4">
              <a 
                href={`tel:${company.contact.phone}`}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Phone size={18} />
              </a>
              <a 
                href={`mailto:${company.contact.email}`}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Mail size={18} />
              </a>
              <a 
                href={`https://instagram.com/${company.contact.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('diferenciais')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Diferenciais
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{company.contact.phone}</p>
                  <p className="text-gray-500 text-sm">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">{company.contact.email}</p>
                  <p className="text-gray-500 text-sm">Resposta em 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Ribeirão Preto - SP</p>
                  <p className="text-gray-500 text-sm">Atendemos todo o interior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-voo py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 {company.name}. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {company.tagline}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Política de Privacidade
              </button>
              <button className="text-gray-400 hover:text-gray-300 text-sm transition-colors">
                Termos de Uso
              </button>
              <button 
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;