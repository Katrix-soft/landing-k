import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowDown } from 'lucide-react';

/**
 * Componente Hero - Sección principal con diseño premium inspirado en la imagen de referencia
 * Incluye efectos de gradientes fluidos, iluminación y tipografía refinada
 */
const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/demo');
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-pearl via-slate-900 to-black-pearl"></div>
      
      {/* Efectos de gradientes fluidos premium */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente principal azul */}
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-blue-chill/60 via-blue-chill/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        {/* Gradiente secundario */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-radial from-surfie-green/50 via-surfie-green/25 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Efectos de luz adicionales */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-radial from-blue-chill/40 via-blue-chill/20 to-transparent rounded-full blur-2xl animate-float"></div>
        
        {/* Overlay sutil para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black-pearl/10"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-6 md:px-8 text-center relative z-10 pt-8">
        <div className="max-w-5xl mx-auto">
          {/* Título principal */}
          <div className="mb-8 md:mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 font-mono">
              <span className="block text-blue-chill text-sm sm:text-base md:text-lg tracking-widest uppercase mb-4 md:mb-6 font-sans font-semibold">
                Software · Automatización · Procesos
              </span>
              <span className="block text-pearl-bush mb-2 md:mb-3 tracking-wider">
                Tu negocio crece.
              </span>
              <span className="block gradient-accent bg-clip-text text-transparent tracking-wider">
                Tu tecnología también.
              </span>
            </h1>
          </div>
          
          {/* Subtítulo */}
          <div className="mb-8 md:mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-friar-gray max-w-4xl mx-auto leading-relaxed font-light font-sans">
              No somos una fábrica de software. Somos el equipo que se sienta con vos, entiende cómo trabajás, y convierte esos procesos en tecnología que escala con tu empresa — sin fricciones, sin genéricos, sin misterios.
            </p>
          </div>
          
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={handleCTAClick}
              className="modern-btn-primary group text-lg px-10 py-4 w-full sm:w-auto"
              aria-label="Ir a la sección de contacto para comenzar tu transformación digital"
            >
              <span className="flex items-center justify-center gap-3">
                Iniciar conversación
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
          
          {/* Estadísticas */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-pearl-bush/10 pt-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">−87%</p>
              <p className="text-friar-gray text-sm uppercase tracking-wider">reducción en tiempos operativos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">100%</p>
              <p className="text-friar-gray text-sm uppercase tracking-wider">proyectos entregados dentro de alcance</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-accent bg-clip-text text-transparent mb-2">día 1</p>
              <p className="text-friar-gray text-sm uppercase tracking-wider">los sistemas funcionan desde el lanzamiento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;