import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

/**
 * Componente Contact - Formulario de contacto con integración a Web3Forms
 * Maneja estados de envío y proporciona feedback visual al usuario
 */
const Contact: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  /**
   * Maneja los cambios en los campos del formulario
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Maneja el envío del formulario usando Web3Forms
   */
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setResult("Enviando mensaje...");
    
    const formDataToSend = new FormData(event.target as HTMLFormElement);
    formDataToSend.append("access_key", "15b0f645-317c-4049-9d6a-eed3d21f7628");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setResult("¡Mensaje enviado con éxito!");
        setFormData({ name: '', email: '', message: '' });
        setFocusedField('');
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus('error');
        setResult(data.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
      setResult("Error al enviar el mensaje. Por favor, intenta nuevamente.");
    }
  };

  /**
   * Determina si un campo debe mostrar la etiqueta flotante activa
   */
  const isLabelActive = (fieldName: string): boolean => {
    return focusedField === fieldName || formData[fieldName as keyof typeof formData] !== '';
  };

  return (
    <section id="contacto" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black-pearl via-slate-900 to-black-pearl"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-chill/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-surfie-green/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pearl-bush mb-6">
            Si tiene sentido hablar, hablemos.
          </h2>
          <p className="text-xl text-friar-gray max-w-3xl mx-auto mb-8">
            Respondemos dentro de las 24 horas hábiles.
          </p>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pearl-bush mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  {/* <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div> */}
                 {/* /* <div>
                    <h4 className="text-pearl-bush font-semibold mb-1">Teléfono</h4>
                    <p className="text-friar-gray">+54 261 123-4567</p>
                  </div> */}
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-pearl-bush font-semibold mb-1">Email</h4>
                    <p className="text-friar-gray">contacto@katrix.com.ar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-pearl-bush font-semibold mb-1">Ubicación</h4>
                    <p className="text-friar-gray">Mendoza, Argentina</p>
                  </div>
                </div>
                
                {/* <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-pearl-bush font-semibold mb-1">Horarios</h4>
                    <p className="text-friar-gray">Lun - Vie: 9:00 - 18:00</p>
                    <p className="text-friar-gray">Sáb: 9:00 - 13:00</p>
                  </div>
                </div> */}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-chill/20 to-surfie-green/20 rounded-xl border border-blue-chill/30">
                <h4 className="text-pearl-bush font-semibold mb-2">¿Necesitas una respuesta urgente?</h4>
                <p className="text-friar-gray text-sm mb-4">
                  Para consultas urgentes, contáctanos directamente por WhatsApp y te responderemos en minutos.
                </p>
                <a href="https://wa.me/5492616557673?text=Hola%2C%20es%20urgente%2C%20necesito%20contactarme%20ya." 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-chill hover:text-surfie-green font-medium transition-colors duration-300">
                  Contactar por WhatsApp →
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-pearl-bush mb-8">
                Envíanos un Mensaje
              </h3>
              
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Campo Nombre */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full bg-slate-900/50 border-2 border-slate-600/50 rounded-xl px-4 py-4 text-pearl-bush placeholder-transparent focus:border-blue-chill focus:outline-none transition-all duration-300"
                    placeholder="Nombre completo"
                    aria-label="Nombre completo"
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isLabelActive('name') 
                      ? 'top-2 text-xs text-blue-chill' 
                      : 'top-1/2 -translate-y-1/2 text-friar-gray'
                  }`}>
                    Nombre completo
                  </label>
                </div>
                
                {/* Campo Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    className="w-full bg-slate-900/50 border-2 border-slate-600/50 rounded-xl px-4 py-4 text-pearl-bush placeholder-transparent focus:border-blue-chill focus:outline-none transition-all duration-300"
                    placeholder="Correo electrónico"
                    aria-label="Correo electrónico"
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isLabelActive('email') 
                      ? 'top-2 text-xs text-blue-chill' 
                      : 'top-1/2 -translate-y-1/2 text-friar-gray'
                  }`}>
                    Correo electrónico
                  </label>
                </div>
                
                {/* Campo Mensaje */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    required
                    rows={6}
                    className="w-full bg-slate-900/50 border-2 border-slate-600/50 rounded-xl px-4 py-4 text-pearl-bush placeholder-transparent focus:border-blue-chill focus:outline-none resize-none transition-all duration-300"
                    placeholder="Cuéntanos sobre tu proyecto"
                    aria-label="Mensaje"
                  />
                  <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    isLabelActive('message') 
                      ? 'top-2 text-xs text-blue-chill' 
                      : 'top-4 text-friar-gray'
                  }`}>
                    Cuéntanos sobre tu proyecto
                  </label>
                </div>
                
                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
                  aria-label="Enviar mensaje"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </button>
                
                {/* Mensajes de estado */}
                {status === 'success' && (
                  <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6 text-center animate-fade-in-up">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <h4 className="text-green-300 font-semibold mb-2">¡Mensaje enviado con éxito!</h4>
                    <p className="text-green-300/80">
                      Hemos recibido tu mensaje y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                    </p>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6 text-center animate-fade-in-up">
                    <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                    <h4 className="text-red-300 font-semibold mb-2">Error al enviar el mensaje</h4>
                    <p className="text-red-300/80">
                      Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos directamente.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;