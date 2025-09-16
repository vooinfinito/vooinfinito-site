import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Send, MessageCircle } from 'lucide-react';
import { mockData } from '../mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const { company } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast.success("Mensagem enviada!", {
      description: "Entraremos em contato em até 24 horas.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    console.log('Form submitted:', formData);
  };

  return (
    <section id="contato" className="section-spacing bg-gray-50">
      <div className="container-voo">
        {/* Section Header */}
        <div className="text-center mb-xl">
          <h2 className="section-title animate-fade-in-up">
            Entre em Contato
          </h2>
          <p className="body-text max-w-2xl mx-auto mt-4 animate-fade-in-up">
            Pronto para elevar seu projeto a novas alturas? Vamos conversar sobre suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
            <h3 className="subsection-title mb-6 text-gray-800">
              Solicite seu Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(16) 99999-9999"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="fotografia">Fotografia Aérea</option>
                  <option value="filmagem">Filmagem Aérea</option>
                  <option value="inspecao">Inspeção Técnica</option>
                  <option value="acompanhamento">Acompanhamento de Obras</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte-nos mais sobre seu projeto..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                <Send size={18} className="mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone Contact */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <p className="text-gray-600">{company.contact.phone}</p>
                    <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
                      Ligar agora
                    </button>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600">{company.contact.phone}</p>
                    <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
                      Enviar mensagem
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-gray-600">{company.contact.email}</p>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      Enviar e-mail
                    </button>
                  </div>
                </div>
              </div>

              {/* Instagram Contact */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Instagram size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Instagram</h4>
                    <p className="text-gray-600">{company.contact.instagram}</p>
                    <button className="text-pink-600 text-sm font-medium hover:text-pink-700 transition-colors">
                      Seguir no Instagram
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-4 flex items-center">
                <MapPin size={20} className="mr-2 text-cyan-400" />
                Atendimento
              </h4>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong className="text-white">Sábado:</strong> 8h às 12h</p>
                <p><strong className="text-white">Domingo:</strong> Emergências</p>
                <p className="text-sm text-cyan-300 mt-4">
                  * Atendemos toda a região de Ribeirão Preto e interior de SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;