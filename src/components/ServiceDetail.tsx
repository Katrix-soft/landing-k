import React from 'react';
import { Settings, Globe, Filter, ShoppingCart, Code, Compass, CheckCircle, ArrowRight } from 'lucide-react';

/**
 * Interfaz para los detalles de cada servicio
 */
interface ServiceDetailProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  process: string[];
  technologies: string[];
  imageUrl: string;
  ctaText: string;
}

/**
 * Componente ServiceDetail - Sección detallada para cada servicio
 * Muestra información completa con imágenes, beneficios y proceso
 */
const ServiceDetail: React.FC<ServiceDetailProps> = ({
  id,
  icon,
  title,
  subtitle,
  description,
  benefits,
  process,
  technologies,
  imageUrl,
  ctaText
}) => {
  const handleCTAClick = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={id} className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black-pearl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full mb-6">
              {icon}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pearl-bush mb-4">
              {title}
            </h2>
            <p className="text-xl text-blue-chill font-medium mb-6">
              {subtitle}
            </p>
            <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-lg text-friar-gray leading-relaxed mb-8">
                {description}
              </p>
              
              <h3 className="text-2xl font-bold text-pearl-bush mb-6">
                Beneficios Clave
              </h3>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-chill mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-pearl-bush">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleCTAClick}
                className="btn-primary inline-flex items-center gap-2"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-pearl/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Process & Technologies */}
          <div className="grid grid-cols-1 gap-12">
            {/* Process */}
            <div className="animate-fade-in-up max-w-4xl mx-auto" style={{animationDelay: '0.6s'}}>
              <h3 className="text-2xl font-bold text-pearl-bush mb-8">
                Nuestro Proceso
              </h3>
              
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-pearl-bush">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Componente que renderiza todas las secciones de servicios detallados
 */
const ServiceDetails: React.FC = () => {
  const services = [
    {
      id: 'automatizacion',
      icon: <Settings className="w-8 h-8 text-white" />,
      title: 'Automatización',
      subtitle: 'Workflows Inteligentes que Trabajan por Ti',
      description: 'Transformamos procesos manuales repetitivos en flujos de trabajo automatizados que funcionan 24/7. Conectamos todas tus aplicaciones empresariales para crear un ecosistema digital cohesivo que elimina errores humanos, reduce costos operativos y libera tiempo valioso para que tu equipo se enfoque en tareas estratégicas de alto valor.',
      benefits: [
        'Reducción del 80% en tareas manuales repetitivas',
        'Integración perfecta entre todas tus aplicaciones',
        'Eliminación de errores humanos en procesos críticos',
        'Notificaciones inteligentes y alertas personalizadas',
        'Escalabilidad automática según el crecimiento del negocio',
        'ROI visible desde el primer mes de implementación'
      ],
      process: [
        'Análisis detallado de tus procesos actuales y identificación de oportunidades',
        'Diseño de workflows personalizados adaptados a tu negocio específico',
        'Implementación gradual con pruebas exhaustivas en cada etapa',
        'Capacitación completa del equipo y documentación detallada',
        'Monitoreo continuo y optimización basada en métricas reales'
      ],
      imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ctaText: 'Automatizar mis Procesos'
    },
    // {
    //   id: 'scraping',
    //   icon: <Globe className="w-8 h-8 text-white" />,
    //   title: 'Extracción de Datos',
    //   subtitle: 'Datos Precisos para Decisiones Inteligentes',
    //   description: 'Recopilamos información valiosa de fuentes públicas en internet de manera ética y eficiente. Nuestros sistemas avanzados procesan y estructuran grandes volúmenes de datos para proporcionarte insights competitivos, leads calificados y análisis de mercado que impulsan el crecimiento de tu negocio con información actualizada en tiempo real.',
    //   benefits: [
    //     'Acceso a datos competitivos actualizados diariamente',
    //     'Generación automática de leads calificados y segmentados',
    //     'Monitoreo continuo de precios y tendencias del mercado',
    //     'Análisis de sentimientos y reputación online en tiempo real',
    //     'Identificación de oportunidades de negocio antes que la competencia',
    //     'Bases de datos estructuradas listas para análisis y CRM'
    //   ],
    //   process: [
    //     'Identificación de fuentes de datos relevantes y análisis de factibilidad',
    //     'Desarrollo de scrapers personalizados con tecnología de vanguardia',
    //     'Implementación de sistemas de limpieza y validación de datos',
    //     'Configuración de pipelines automatizados de extracción y procesamiento',
    //     'Entrega de datos estructurados y dashboards de monitoreo en tiempo real'
    //   ],
    //   imageUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
    //   ctaText: 'Obtener mis Datos'
    // },
    {
      id: 'ecommerce',
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      title: 'Desarrollo de E-commerce',
      subtitle: 'Tiendas Online que Convierten Visitantes en Clientes',
      description: 'Creamos experiencias de compra excepcionales que maximizan las conversiones y fidelizan clientes. Nuestras tiendas online combinan diseño atractivo, funcionalidad avanzada y tecnología de punta para ofrecer una experiencia de usuario fluida desde el primer clic hasta la entrega del producto, con integración completa de sistemas de pago, inventario y logística.',
      benefits: [
        'Diseño responsive optimizado para todos los dispositivos móviles',
        'Integración completa con pasarelas de pago seguras y confiables',
        'Sistema de gestión de inventario automatizado y en tiempo real',
        'SEO avanzado para máxima visibilidad en motores de búsqueda',
        'Analytics detallados para optimización continua de conversiones',
        'Escalabilidad para crecer junto con tu negocio sin limitaciones'
      ],
      process: [
        'Análisis de mercado y definición de estrategia de e-commerce personalizada',
        'Diseño UX/UI centrado en conversión y experiencia del usuario',
        'Desarrollo con tecnologías modernas y mejores prácticas de seguridad',
        'Integración de sistemas de pago, logística y herramientas de marketing',
        'Testing exhaustivo, lanzamiento y optimización continua basada en datos'
      ],
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ctaText: 'Crear mi Tienda Online'
    },
    // {
    //   id: 'datos',
    //   icon: <Filter className="w-8 h-8 text-white" />,
    //   title: 'Tratamiento de Datos',
    //   subtitle: 'Transformamos Datos en Insights Accionables',
    //   description: 'Convertimos datos dispersos y desordenados en información valiosa y accionable para tu negocio. Nuestros procesos de limpieza, transformación y análisis de datos te permiten tomar decisiones informadas basadas en evidencia real, identificar patrones ocultos y predecir tendencias futuras que impulsen el crecimiento estratégico de tu empresa.',
    //   benefits: [
    //     'Limpieza y estructuración de bases de datos complejas y dispersas',
    //     'Dashboards interactivos con métricas clave en tiempo real',
    //     'Análisis predictivo para anticipar tendencias del mercado',
    //     'Reportes automatizados personalizados para cada área del negocio',
    //     'Integración de múltiples fuentes de datos en una vista unificada',
    //     'Alertas inteligentes basadas en KPIs críticos del negocio'
    //   ],
    //   process: [
    //     'Auditoría completa de fuentes de datos existentes y calidad de información',
    //     'Diseño de arquitectura de datos escalable y eficiente',
    //     'Implementación de pipelines de ETL automatizados y monitoreados',
    //     'Desarrollo de dashboards personalizados con visualizaciones interactivas',
    //     'Capacitación del equipo y establecimiento de procesos de mantenimiento'
    //   ],
    //   imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    //   ctaText: 'Optimizar mis Datos'
    // },
    {
      id: 'web',
      icon: <Code className="w-8 h-8 text-white" />,
      title: 'Páginas Web a Medida',
      subtitle: 'Presencia Digital que Refleja tu Marca',
      description: 'Diseñamos y desarrollamos sitios web corporativos únicos que capturan la esencia de tu marca y convierten visitantes en clientes. Cada proyecto combina diseño visual impactante, experiencia de usuario excepcional y tecnología moderna para crear una presencia digital memorable que destaque en un mercado competitivo y genere resultados medibles.',
      benefits: [
        'Diseño personalizado que refleja la identidad única de tu marca',
        'Desarrollo responsive optimizado para todos los dispositivos',
        'SEO técnico avanzado para máxima visibilidad en buscadores',
        'Velocidad de carga optimizada para mejor experiencia de usuario',
        'Integración con CMS para gestión autónoma de contenido',
        'Analytics y herramientas de conversión integradas desde el inicio'
      ],
      process: [
        'Investigación de marca y análisis de competencia en tu sector',
        'Diseño de wireframes y prototipos interactivos para validación',
        'Desarrollo frontend y backend con tecnologías modernas',
        'Optimización SEO técnica y de contenido para posicionamiento',
        'Testing exhaustivo, lanzamiento y soporte continuo post-lanzamiento'
      ],
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ctaText: 'Crear mi Sitio Web'
    },
    {
      id: 'consultoria',
      icon: <Compass className="w-8 h-8 text-white" />,
      title: 'Consultoría Tecnológica',
      subtitle: 'Estrategia Digital para el Crecimiento Sostenible',
      description: 'Guiamos a tu empresa en la transformación digital integral, desde la evaluación de tecnologías actuales hasta la implementación de soluciones innovadoras. Nuestro enfoque estratégico combina análisis técnico profundo con visión de negocio para crear roadmaps tecnológicos que optimizan procesos, reducen costos y posicionan tu empresa como líder en su industria.',
      benefits: [
        'Auditoría tecnológica completa con recomendaciones específicas',
        'Roadmap de transformación digital personalizado y escalable',
        'Selección e implementación de herramientas tecnológicas óptimas',
        'Capacitación especializada del equipo en nuevas tecnologías',
        'Optimización de procesos existentes con enfoque en eficiencia',
        'Acompañamiento continuo durante todo el proceso de transformación'
      ],
      process: [
        'Diagnóstico integral de la situación tecnológica actual de la empresa',
        'Definición de objetivos estratégicos y KPIs de transformación digital',
        'Diseño de roadmap detallado con fases, timelines y presupuestos',
        'Implementación gradual con seguimiento y ajustes continuos',
        'Evaluación de resultados y planificación de siguientes fases evolutivas'
      ],
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ctaText: 'Iniciar mi Transformación'
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <ServiceDetail key={service.id} {...service} />
      ))}
    </>
  );
};

export default ServiceDetails;