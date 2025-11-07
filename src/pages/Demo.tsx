import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Pause, RotateCcw, CheckCircle, Clock, AlertCircle, Settings, Mail, Database, FileText, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Interfaz para los pasos del workflow
 */
interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'pending' | 'running' | 'completed' | 'error';
  duration: number;
}

/**
 * Página Demo - Simulación interactiva de automatización
 */
const Demo: React.FC = () => {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'trigger',
      title: 'Nuevo Cliente Registrado',
      description: 'Se detecta un nuevo registro en el formulario web',
      icon: <Users className="w-6 h-6" />,
      status: 'pending',
      duration: 1000
    },
    {
      id: 'validate',
      title: 'Validar Datos',
      description: 'Verificación automática de email y datos del cliente',
      icon: <CheckCircle className="w-6 h-6" />,
      status: 'pending',
      duration: 2000
    },
    {
      id: 'database',
      title: 'Guardar en CRM',
      description: 'Los datos se almacenan automáticamente en el sistema CRM',
      icon: <Database className="w-6 h-6" />,
      status: 'pending',
      duration: 1500
    },
    {
      id: 'email',
      title: 'Enviar Email de Bienvenida',
      description: 'Email personalizado enviado automáticamente al cliente',
      icon: <Mail className="w-6 h-6" />,
      status: 'pending',
      duration: 2500
    },
    {
      id: 'document',
      title: 'Generar Propuesta',
      description: 'Creación automática de propuesta comercial personalizada',
      icon: <FileText className="w-6 h-6" />,
      status: 'pending',
      duration: 3000
    },
    {
      id: 'notify',
      title: 'Notificar al Equipo',
      description: 'Alerta automática al equipo de ventas con los datos del lead',
      icon: <AlertCircle className="w-6 h-6" />,
      status: 'pending',
      duration: 1000
    }
  ];

  const [steps, setSteps] = useState(workflowSteps);

  const runWorkflow = async () => {
    setIsRunning(true);
    setCurrentStep(0);
    setCompletedSteps([]);
    
    // Reset all steps
    setSteps(workflowSteps.map(step => ({ ...step, status: 'pending' })));

    for (let i = 0; i < workflowSteps.length; i++) {
      setCurrentStep(i);
      
      // Set current step as running
      setSteps(prev => prev.map((step, index) => 
        index === i ? { ...step, status: 'running' } : step
      ));

      // Wait for step duration
      await new Promise(resolve => setTimeout(resolve, workflowSteps[i].duration));

      // Mark step as completed
      setSteps(prev => prev.map((step, index) => 
        index === i ? { ...step, status: 'completed' } : step
      ));
      
      setCompletedSteps(prev => [...prev, i]);
    }

    setIsRunning(false);
    setCurrentStep(-1);
  };

  const resetWorkflow = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setCompletedSteps([]);
    setSteps(workflowSteps.map(step => ({ ...step, status: 'pending' })));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-blue-chill bg-blue-chill/20 border-blue-chill/40';
      case 'completed': return 'text-green-400 bg-green-400/20 border-green-400/40';
      case 'error': return 'text-red-400 bg-red-400/20 border-red-400/40';
      default: return 'text-friar-gray bg-slate-800/50 border-slate-600/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running': return <Clock className="w-4 h-4 animate-spin" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'error': return <AlertCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-black-pearl text-pearl-bush">
      {/* Header */}
      <header className="bg-gradient-to-r from-black-pearl to-slate-900 border-b border-slate-700/50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-pearl-bush hover:text-blue-chill transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al Inicio
              </button>
              <div className="w-px h-6 bg-slate-600"></div>
              <h1 className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">
                Demo de Automatización
              </h1>
            </div>
            
            <div className="flex items-center gap-2">
              <img 
                src="/icon_512x512.png" 
                alt="Katrix Logo" 
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="text-xl font-bold gradient-accent bg-clip-text text-transparent font-mono">
                Katrix
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Introduction */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-pearl-bush mb-6">
              Automatización en Acción
            </h2>
            <p className="text-xl text-friar-gray max-w-3xl mx-auto mb-8">
              Observa cómo un simple registro de cliente se convierte en un proceso 
              completamente automatizado que ahorra horas de trabajo manual.
            </p>
            <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
          </div>

          {/* Demo Controls */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-pearl-bush mb-2">
                  Workflow: Registro de Cliente
                </h3>
                <p className="text-friar-gray">
                  Simula el proceso completo desde el registro hasta la generación de propuesta
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={runWorkflow}
                  disabled={isRunning}
                  className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-5 h-5" />
                      Ejecutando...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Iniciar Demo
                    </>
                  )}
                </button>
                
                <button
                  onClick={resetWorkflow}
                  disabled={isRunning}
                  className="modern-btn-secondary group px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reiniciar
                </button>
              </div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-2 rounded-2xl p-6 transition-all duration-500 animate-fade-in-up ${getStatusColor(step.status)}`}
                style={{animationDelay: `${0.3 + index * 0.1}s`}}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(step.status)}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-pearl-bush mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-friar-gray leading-relaxed">
                  {step.description}
                </p>

                {/* Progress Bar */}
                {step.status === 'running' && (
                  <div className="mt-4">
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-chill to-surfie-green h-2 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Results Panel */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <h3 className="text-2xl font-bold text-pearl-bush mb-6">
              Resultados del Proceso
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-pearl-bush mb-2">Tiempo Ahorrado</h4>
                <p className="text-3xl font-bold gradient-accent bg-clip-text text-transparent mb-2">45 min</p>
                <p className="text-friar-gray text-sm">Por cada cliente registrado</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-pearl-bush mb-2">Precisión</h4>
                <p className="text-3xl font-bold gradient-accent bg-clip-text text-transparent mb-2">99.9%</p>
                <p className="text-friar-gray text-sm">Sin errores humanos</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-chill to-surfie-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-pearl-bush mb-2">Disponibilidad</h4>
                <p className="text-3xl font-bold gradient-accent bg-clip-text text-transparent mb-2">24/7</p>
                <p className="text-friar-gray text-sm">Funciona sin descanso</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <h3 className="text-3xl font-bold text-pearl-bush mb-4">
              ¿Listo para Automatizar tu Negocio?
            </h3>
            <p className="text-xl text-friar-gray mb-8 max-w-2xl mx-auto">
              Este es solo un ejemplo de lo que podemos hacer. Cada automatización se diseña 
              específicamente para las necesidades de tu empresa.
            </p>
            <button
              onClick={() => navigate('/#contacto')}
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Solicitar mi Automatización
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;