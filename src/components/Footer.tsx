import React from 'react';
import { Linkedin, Github, MapPin, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

/**
 * Componente Footer - Pie de página con información corporativa y enlaces
 * Incluye logo, copyright y enlaces a redes sociales
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-slate-900 to-black-pearl border-t border-slate-700/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="gradient-accent bg-clip-text text-transparent">
                    Katrix
                  </span>
                </h3>
                <p className="text-friar-gray leading-relaxed mb-6">
                  Transformamos negocios a través de la automatización inteligente y soluciones 
                  de datos innovadoras. Desde Mendoza, Argentina, ayudamos a empresas de todo 
                  el mundo a digitalizar sus procesos y alcanzar su máximo potencial.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-pearl-bush">
                    <MapPin className="w-5 h-5 text-blue-chill" />
                    <span>Mendoza, Argentina</span>
                  </div>
                  <div className="flex items-center gap-3 text-pearl-bush">
                    <Mail className="w-5 h-5 text-blue-chill" />
                    <span>contacto@katrix.com.ar</span>
                  </div>
                  {/* <div className="flex items-center gap-3 text-pearl-bush">
                    <Phone className="w-5 h-5 text-blue-chill" />
                    <span>+54 261 123-4567</span>
                  </div> */}
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h4 className="text-xl font-bold text-pearl-bush mb-6">Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#automatizacion" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Automatización
                  </a>
                </li>
                {/* <li>
                  <a href="#scraping" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Extracción de Datos
                  </a>
                </li> */}
                {/* <li>
                  <a href="#datos" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Tratamiento de Datos
                  </a>
                </li> */}
                <li>
                  <a href="#ecommerce" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    E-commerce
                  </a>
                </li>
                <li>
                  <a href="#web" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Desarrollo Web
                  </a>
                </li>
                <li>
                  <a href="#consultoria" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Consultoría Tech
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h4 className="text-xl font-bold text-pearl-bush mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#inicio" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a href="#" className="text-friar-gray hover:text-blue-chill transition-colors duration-300">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Social Media & Copyright */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Media */}
              <div className="flex items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <span className="text-pearl-bush font-medium mr-2">Síguenos:</span>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-friar-gray hover:text-blue-chill hover:border-blue-chill/50 transition-all duration-300"
                  aria-label="Visitar LinkedIn de Katrix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-friar-gray hover:text-blue-chill hover:border-blue-chill/50 transition-all duration-300"
                  aria-label="Visitar GitHub de Katrix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-friar-gray hover:text-blue-chill hover:border-blue-chill/50 transition-all duration-300"
                  aria-label="Visitar Instagram de Katrix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-friar-gray hover:text-blue-chill hover:border-blue-chill/50 transition-all duration-300"
                  aria-label="Visitar Facebook de Katrix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-friar-gray hover:text-blue-chill hover:border-blue-chill/50 transition-all duration-300"
                  aria-label="Visitar Twitter de Katrix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              
              {/* Copyright */}
              <div className="text-friar-gray text-center md:text-right animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <p>© {currentYear} Katrix. Todos los derechos reservados.</p>
                <p className="text-sm mt-1">Hecho con ❤️ en Mendoza, Argentina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;