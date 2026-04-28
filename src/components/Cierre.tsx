import React from 'react';

const Cierre: React.FC = () => {
  return (
    <section className="py-24 px-4 relative bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto relative z-10 max-w-4xl text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-pearl-bush mb-6">
          No somos un proveedor más. Somos el equipo técnico que su organización necesita tener del otro lado.
        </h2>
        <p className="text-xl text-friar-gray leading-relaxed">
          Trabajamos con empresas que tienen problemas reales de operación y necesitan soluciones concretas — no propuestas genéricas ni equipos que desaparecen después del lanzamiento.
        </p>
      </div>
    </section>
  );
};

export default Cierre;
