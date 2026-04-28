import React from 'react';
import { Play, Triangle, Square } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Play className="w-6 h-6 text-surfie-green" fill="currentColor" />,
      title: "Automatizamos lo que te quita tiempo",
      description: "Tareas repetitivas, flujos manuales, datos dispersos — procesos que corren solos."
    },
    {
      icon: <Triangle className="w-6 h-6 text-blue-chill" fill="currentColor" />,
      title: "Proyectamos tu crecimiento",
      description: "No entregamos código y nos vamos. Planificamos qué necesitás hoy y qué vas a necesitar mañana."
    },
    {
      icon: <Square className="w-6 h-6 text-pearl-bush" fill="currentColor" />,
      title: "Tecnología que es tuya",
      description: "Soluciones que encajan con tu industria, tu equipo y tu forma de operar. Nada de lo que no usás."
    }
  ];

  return (
    <section id="servicios" className="py-24 px-4 relative bg-black-pearl">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-sm font-semibold tracking-widest text-blue-chill uppercase mb-4">
            Lo que hacemos
          </h2>
          <div className="w-12 h-1 gradient-accent rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-slate-800/30 rounded-xl border border-slate-700/50 group-hover:border-blue-chill/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-pearl-bush">
                  {service.title}
                </h3>
              </div>
              <p className="text-friar-gray leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;