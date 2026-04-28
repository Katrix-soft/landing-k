import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
    LucideAngularModule, ArrowLeft, Play, Pause, RotateCcw, CheckCircle,
    Clock, AlertCircle, Settings, Mail, Database, FileText, Users
} from 'lucide-angular';

interface WorkflowStep {
    id: string;
    title: string;
    description: string;
    icon: any;
    status: 'pending' | 'running' | 'completed' | 'error';
    duration: number;
}

@Component({
    selector: 'app-demo',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, RouterModule],
    templateUrl: './demo.html'
})
export class Demo {
    isRunning = signal(false);
    currentStep = signal(0);
    completedSteps = signal<number[]>([]);

    readonly ArrowLeft = ArrowLeft;
    readonly Play = Play;
    readonly Pause = Pause;
    readonly RotateCcw = RotateCcw;
    readonly CheckCircle = CheckCircle;
    readonly Clock = Clock;
    readonly AlertCircle = AlertCircle;
    readonly Settings = Settings;

    workflowSteps: WorkflowStep[] = [
        {
            id: 'trigger',
            title: 'Nuevo Cliente Registrado',
            description: 'Se detecta un nuevo registro en el formulario web',
            icon: Users,
            status: 'pending',
            duration: 1000
        },
        {
            id: 'validate',
            title: 'Validar Datos',
            description: 'Verificación automática de email y datos del cliente',
            icon: CheckCircle,
            status: 'pending',
            duration: 2000
        },
        {
            id: 'database',
            title: 'Guardar en CRM',
            description: 'Los datos se almacenan automáticamente en el sistema CRM',
            icon: Database,
            status: 'pending',
            duration: 1500
        },
        {
            id: 'email',
            title: 'Enviar Email de Bienvenida',
            description: 'Email personalizado enviado automáticamente al cliente',
            icon: Mail,
            status: 'pending',
            duration: 2500
        },
        {
            id: 'document',
            title: 'Generar Propuesta',
            description: 'Creación automática de propuesta comercial personalizada',
            icon: FileText,
            status: 'pending',
            duration: 3000
        },
        {
            id: 'notify',
            title: 'Notificar al Equipo',
            description: 'Alerta automática al equipo de ventas con los datos del lead',
            icon: AlertCircle,
            status: 'pending',
            duration: 1000
        }
    ];

    steps = signal<WorkflowStep[]>([]);

    constructor(private router: Router) {
        this.steps.set(this.workflowSteps.map(s => ({ ...s })));
    }

    async runWorkflow() {
        this.isRunning.set(true);
        this.currentStep.set(0);
        this.completedSteps.set([]);

        // Reset all steps
        this.steps.set(this.workflowSteps.map(step => ({ ...step, status: 'pending' })));

        for (let i = 0; i < this.workflowSteps.length; i++) {
            this.currentStep.set(i);

            // Set running
            this.steps.update(prev => prev.map((step, index) =>
                index === i ? { ...step, status: 'running' } : step
            ));

            // Wait
            await new Promise(resolve => setTimeout(resolve, this.workflowSteps[i].duration));

            // Set completed
            this.steps.update(prev => prev.map((step, index) =>
                index === i ? { ...step, status: 'completed' } : step
            ));

            this.completedSteps.update(prev => [...prev, i]);
        }

        this.isRunning.set(false);
        this.currentStep.set(-1);
    }

    resetWorkflow() {
        this.isRunning.set(false);
        this.currentStep.set(0);
        this.completedSteps.set([]);
        this.steps.set(this.workflowSteps.map(step => ({ ...step, status: 'pending' })));
    }

    getStatusColor(status: string): string {
        switch (status) {
            case 'running': return 'text-blue-chill bg-blue-chill/20 border-blue-chill/40';
            case 'completed': return 'text-green-400 bg-green-400/20 border-green-400/40';
            case 'error': return 'text-red-400 bg-red-400/20 border-red-400/40';
            default: return 'text-friar-gray bg-slate-800/50 border-slate-600/50';
        }
    }

    navigateToContact() {
        this.router.navigate(['/'], { fragment: 'contacto' });
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
