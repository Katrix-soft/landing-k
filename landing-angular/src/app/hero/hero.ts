import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, ChevronRight } from 'lucide-angular';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [LucideAngularModule],
    templateUrl: './hero.html'
})
export class Hero {
    readonly ChevronRight = ChevronRight;

    constructor(private router: Router) { }

    handleCTAClick() {
        this.router.navigate(['/demo']);
    }

    scrollToServices() {
        document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
    }
}
