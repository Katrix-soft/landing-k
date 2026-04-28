import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Cierre from './components/Cierre';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Componente principal de la aplicación
 * Renderiza todas las secciones de la landing page de Katrix
 */
function App() {
  return (
    <div className="min-h-screen bg-black-pearl text-pearl-bush">
      <Navigation />
      <Hero />
      <Services />
      <Cierre />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;