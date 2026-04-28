import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Settings, ShoppingCart, Code, Compass, CheckCircle, ArrowRight } from 'lucide-angular';

interface ServiceDetailProps {
    id: string;
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    process: string[];
    imageUrl: string;
    ctaText: string;
}

@Component({
    selector: 'app-service-detail',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './service-detail.html'
})
export class ServiceDetail {
    readonly CheckCircle = CheckCircle;
    readonly ArrowRight = ArrowRight;

    services: ServiceDetailProps[] = [
        {
            id: 'automatizacion',
            icon: Settings,
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
        {
            id: 'ecommerce',
            icon: ShoppingCart,
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
        {
            id: 'web',
            icon: Code,
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
            icon: Compass,
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

    handleCTAClick() {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }
}
