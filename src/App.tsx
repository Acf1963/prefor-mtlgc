/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { Phone, MapPin, CheckCircle2, MessageSquare, ArrowRight, Hammer, Shield, Clock, Star, Construction, Warehouse, Menu, X, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const businessInfo = {
    name: "Prefor Metalúrgica",
    location: "Zango 1, Luanda, Angola",
    whatsapp: "+244947892185",
    displayWhatsapp: "+244 947 892 185",
    services: [
      { title: "Portões Modernos", desc: "Portões de correr e bater com acabamento premium." },
      { title: "Grades de Proteção", desc: "Segurança máxima para janelas e vedações residenciais." },
      { title: "Coberturas Metálicas", desc: "Soluções para parques, pátios e áreas de lazer." },
      { title: "Estruturas em Inox", desc: "Corrimãos e detalhes de luxo em aço inoxidável." },
      { title: "Estruturas Metálicas", desc: "Montagem de armazéns e galpões para empresas." },
      { title: "Soldadura e Reparos", desc: "Serviços rápidos de manutenção e solda geral." }
    ]
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const title = "Prefor Metalúrgica - Luanda";
    document.title = title;
    
    // Force title multiple times during initial load to beat any race conditions
    const interval = setInterval(() => {
      if (document.title !== title) document.title = title;
    }, 1000);
    
    // Clear interval after 5 seconds
    const timeout = setTimeout(() => clearInterval(interval), 5000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${businessInfo.whatsapp.replace(/\+/g, '')}`, '_blank');
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-orange-100 bg-slate-100 overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/prflg01.png?v=2" 
              alt="Logo" 
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase italic truncate max-w-37.5 sm:max-w-none">
              {businessInfo.name}
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-xs font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Início</a>
            <a href="#servicos" className="text-xs font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Serviços</a>
            <a href="#porque-escolher" className="text-xs font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Diferenciais</a>
            <a href="#orcamento" className="text-xs font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Orçamento</a>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all tracking-widest"
            >
              CONTACTAR
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-50"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); toggleMenu(); }} className="text-sm font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Início</a>
                <a href="#servicos" onClick={toggleMenu} className="text-sm font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Serviços</a>
                <a href="#porque-escolher" onClick={toggleMenu} className="text-sm font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Diferenciais</a>
                <a href="#orcamento" onClick={toggleMenu} className="text-sm font-bold text-slate-300 hover:text-orange-500 transition-colors uppercase tracking-widest">Orçamento</a>
                <button 
                  onClick={() => { handleWhatsAppClick(); toggleMenu(); }}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl font-bold text-sm tracking-widest w-full transition-all active:scale-95"
                >
                  CONTACTAR AGORA
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Metallic Background Overlay for the whole page */}
      <div className="fixed inset-0 z-[-1] bg-linear-to-br from-[#d1d5db] via-[#9ca3af] to-[#d1d5db] opacity-30 pointer-events-none"></div>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-24 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920" 
            alt="Metal Workshop" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Metallic Gradient Overlay */}
        <div className="absolute inset-0 z-1 bg-linear-to-t from-slate-900 via-transparent to-slate-900/50"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-500 uppercase bg-orange-500/10 rounded-full border border-orange-500/20 backdrop-blur-sm">
              Serralharia e Metalomecânica em Luanda
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic leading-none drop-shadow-2xl">
              {businessInfo.name}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light px-4 drop-shadow-md">
              Especialistas em Portões, Grades e Estruturas Metálicas de Alta Resistência. Qualidade que se vê, segurança que se sente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all transform hover:scale-105 shadow-2xl shadow-orange-900/40 active:scale-95"
              >
                <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                ORÇAMENTO NO WHATSAPP
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stainless Steel Texture Section */}
      <main className="relative z-10">
        {/* Services */}
        <section id="servicos" className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Nossos Serviços</h2>
            <div className="h-1.5 w-20 md:w-24 bg-orange-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-xl mx-auto text-sm md:text-base">Atendemos particulares e empresas com o mesmo rigor técnico e compromisso com a durabilidade.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {businessInfo.services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all border-b-4 border-b-slate-300 hover:border-b-orange-600"
              >
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-all duration-500 shadow-lg group-hover:shadow-orange-500/20 group-hover:-translate-y-1">
                  {index % 2 === 0 ? <Hammer className="w-7 h-7" /> : <Construction className="w-7 h-7" />}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-12 md:py-20 bg-linear-to-r from-slate-300 via-slate-100 to-slate-300 border-y border-slate-400 shadow-inner">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-1">100%</p>
                <p className="text-[10px] md:text-xs uppercase font-bold text-slate-500 tracking-widest">Aço Reforçado</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-1">+500</p>
                <p className="text-[10px] md:text-xs uppercase font-bold text-slate-500 tracking-widest">Obras Feitas</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-1">24h</p>
                <p className="text-[10px] md:text-xs uppercase font-bold text-slate-500 tracking-widest">Suporte WhatsApp</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-slate-900 mb-1">Zango</p>
                <p className="text-[10px] md:text-xs uppercase font-bold text-slate-500 tracking-widest">Localização Central</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="porque-escolher" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px]"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase italic tracking-tighter">Porquê escolher a <span className="text-orange-500">Prefor Metalúrgica</span>?</h2>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Segurança em Primeiro Lugar</h4>
                      <p className="text-sm md:text-base text-slate-400">Nossas grades e portões são projetados para oferecer a máxima proteção à sua família e património.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Acabamento de Luxo</h4>
                      <p className="text-sm md:text-base text-slate-400">Especialistas em Inox e estruturas com pintura eletrostática de alta durabilidade.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                      <Warehouse className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Capacidade Industrial</h4>
                      <p className="text-sm md:text-base text-slate-400">Equipados para atender desde pequenas reparações domésticas até grandes estruturas industriais.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" alt="Soldadura de Precisão" className="rounded-2xl h-48 md:h-64 w-full object-cover shadow-2xl" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Desenho Técnico e Planeamento" className="rounded-2xl h-48 md:h-64 w-full object-cover mt-6 md:mt-8 shadow-2xl" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="orcamento" className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
          <div className="bg-linear-to-br from-slate-100 to-slate-300 rounded-4xl md:rounded-5xl p-8 md:p-20 text-center border border-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 uppercase tracking-tighter">Solicite o seu orçamento hoje!</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto">
              Estamos no Zango 1 prontos para transformar o seu projeto em realidade com o melhor aço de Luanda.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={handleWhatsAppClick}
                className="group relative inline-flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl transition-all shadow-xl hover:shadow-green-900/20 w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-6 h-6 md:w-7 md:h-7 animate-pulse" />
                FALAR COM A EQUIPA
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-slate-500 mt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span className="font-bold text-sm md:text-base">{businessInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span className="font-bold text-sm md:text-base">{businessInfo.displayWhatsapp}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="/prflg01.png?v=2" 
              alt="Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="text-2xl font-black tracking-tighter uppercase italic mb-1">{businessInfo.name}</h3>
              <p className="text-slate-500 text-sm">Qualidade e Segurança em Metalomecânica.</p>
            </div>
          </div>
          <p className="text-slate-600 text-[10px] md:text-xs uppercase tracking-widest">
            &copy; 2024 Prefor Metalúrgica. Luanda, Angola.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-2xl shadow-2xl transition-all active:scale-95 group"
            aria-label="Voltar ao topo"
          >
            <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
