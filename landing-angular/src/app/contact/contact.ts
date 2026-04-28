import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LucideAngularModule, Send, CheckCircle, AlertCircle, Mail, MapPin } from 'lucide-angular';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule, LucideAngularModule],
    templateUrl: './contact.html'
})
export class Contact {
    status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
    focusedField = signal('');
    formData = {
        name: '',
        email: '',
        message: ''
    };

    readonly Send = Send;
    readonly CheckCircle = CheckCircle;
    readonly AlertCircle = AlertCircle;
    readonly Mail = Mail;
    readonly MapPin = MapPin;

    isLabelActive(fieldName: string): boolean {
        return this.focusedField() === fieldName || (this.formData as any)[fieldName] !== '';
    }

    onFocus(fieldName: string) {
        this.focusedField.set(fieldName);
    }

    onBlur() {
        this.focusedField.set('');
    }

    async onSubmit(form: NgForm) {
        if (form.invalid) return;

        this.status.set('sending');
        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "15b0f645-317c-4049-9d6a-eed3d21f7628");
        formDataToSend.append("name", this.formData.name);
        formDataToSend.append("email", this.formData.email);
        formDataToSend.append("message", this.formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });
            const data = await response.json();

            if (data.success) {
                this.status.set('success');
                this.formData = { name: '', email: '', message: '' };
                this.focusedField.set('');
                form.resetForm();
            } else {
                console.error("Error", data);
                this.status.set('error');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            this.status.set('error');
        }
    }
}
