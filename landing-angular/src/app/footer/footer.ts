import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    Linkedin, Github, MapPin, Instagram, Facebook, Twitter, Mail, Phone
} from 'lucide-angular';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './footer.html'
})
export class Footer {
    currentYear = new Date().getFullYear();

    readonly Linkedin = Linkedin;
    readonly Github = Github;
    readonly MapPin = MapPin;
    readonly Instagram = Instagram;
    readonly Facebook = Facebook;
    readonly Twitter = Twitter;
    readonly Mail = Mail;
    readonly Phone = Phone;
}
