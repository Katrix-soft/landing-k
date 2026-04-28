import React from 'react';
import { 
  Settings, 
  Globe, 
  Filter, 
  ShoppingCart, 
  Code, 
  Compass,
  ArrowRight
} from 'lucide-react';

/**
 * Interfaz para definir la estructura de cada servicio
 */
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  sectionId: string;
}

/**
 * Componente Services - Sección de servicios ofrecidos
 * Muestra una grilla de 6 servicios con animaciones y efectos hover
 */
const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Settings className="w-8 h-8 text-blue-chill" />,
      title: "Automatización",
      description: "Conectamos tus aplicaciones y eliminamos tareas repetitivas para que te enfoques en lo que realmente importa. Creamos flujos de trabajo inteligentes que funcionan 24/7.",
      features: ["Integración de APIs", "Workflows automatizados", "Sincronización de datos", "Notificaciones inteligentes"],
      imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      sectionId: "automatizacion"
    },
    // {
    //   icon: <Globe className="w-8 h-8 text-blue-chill" />,
    //   title: "Extracción de Datos",
    //   description: "Recopilamos información pública de diversas fuentes web de forma estructurada para análisis de mercado y generación de leads. Información precisa y actualizada para tomar mejores decisiones.",
    //   features: ["Extracción masiva de datos", "Análisis de competencia", "Generación de leads", "Monitoreo de precios"],
    //   imageUrl: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   sectionId: "scraping"
    // },
    // {
    //   icon: <Filter className="w-8 h-8 text-blue-chill" />,
    //   title: "Tratamiento de Datos",
    //   description: "Limpiamos, transformamos y enriquecemos tus datos para convertirlos en información valiosa y accionable. Dashboards interactivos y reportes automatizados.",
    //   features: ["Limpieza de datos", "Análisis predictivo", "Dashboards interactivos", "Reportes automatizados"],
    //   imageUrl: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   sectionId: "datos"
    // },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-chill" />,
      title: "Desarrollo de E-commerce",
      description: "Creamos tiendas online a medida, rápidas y seguras, optimizadas para la conversión y la mejor experiencia de usuario. Plataformas escalables con integración completa.",
      features: ["Diseño responsive", "Pasarelas de pago", "Gestión de inventario", "SEO optimizado"],
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      sectionId: "ecommerce"
    },
    {
      icon: <Code className="w-8 h-8 text-blue-chill" />,
      title: "Páginas Web a Medida",
      description: "Diseñamos y desarrollamos sitios web corporativos y landing pages que reflejan la identidad de tu marca y cumplen tus objetivos. Experiencias digitales memorables.",
      features: ["Diseño personalizado", "Desarrollo responsive", "Optimización SEO", "Integración CMS"],
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      sectionId: "web"
    },
    {
      icon: <Compass className="w-8 h-8 text-blue-chill" />,
      title: "Consultoría Tecnológica",
      description: "Te guiamos en la elección e implementación de las herramientas tecnológicas adecuadas para optimizar tus procesos. Estrategias digitales que generan resultados.",
      features: ["Auditoría tecnológica", "Estrategia digital", "Implementación de herramientas", "Capacitación del equipo"],
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      sectionId: "consultoria"
    }
  ];

  const scrollToService = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black-pearl to-slate-900"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pearl-bush mb-6">
            Lo que hacemos
          </h2>
          <div className="text-xl text-friar-gray max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-blue-chill mb-4 flex justify-center items-center gap-2">
              <span className="text-surfie-green">▶</span> Automatizamos lo que te quita tiempo
            </h3>
            <p>Tareas repetitivas, flujos manuales, datos dispersos — procesos que corren solos.</p>
          </div>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-center place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-fade-in-up group cursor-pointer mx-auto w-full max-w-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => scrollToService(service.sectionId)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-pearl/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {service.icon}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-pearl-bush mb-3 group-hover:text-blue-chill transition-colors duration-300 text-center">
                  {service.title}
                </h3>
                
                <p className="text-friar-gray leading-relaxed mb-4 text-sm text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-xs text-pearl-bush/80">
                      <div className="w-1.5 h-1.5 bg-blue-chill rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-center text-blue-chill font-medium group-hover:text-surfie-green transition-colors duration-300 text-sm">
                <span className="mr-2">Ver más detalles</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              
              {/* Indicador visual de hover mejorado */}
              <div className="mt-4 h-1 w-0 gradient-accent rounded-full transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;