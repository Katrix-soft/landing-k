import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Play, Triangle, Square, ArrowRight } from 'lucide-angular';

interface Service {
    icon: any;
    title: string;
    description: string;
    sectionId: string;
}

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './services.html'
})
export class Services {
    readonly ArrowRight = ArrowRight;

    services: Service[] = [
        {
            icon: Play,
            title: "Automatizamos lo que te quita tiempo",
            description: "Tareas repetitivas, flujos manuales, datos dispersos — procesos que corren solos.",
            sectionId: "automatizacion"
        },
        {
            icon: Triangle,
            title: "Proyectamos tu crecimiento",
            description: "No entregamos código y nos vamos. Planificamos qué necesitás hoy y qué vas a necesitar mañana.",
            sectionId: "crecimiento"
        },
        {
            icon: Square,
            title: "Tecnología que es tuya",
            description: "Soluciones que encajan con tu industria, tu equipo y tu forma de operar. Nada de lo que no usás.",
            sectionId: "tecnologia"
        }
    ];

    scrollToService(sectionId: string) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
}
