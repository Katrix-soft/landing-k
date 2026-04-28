import { Component, HostListener, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, NgOptimizedImage],
  templateUrl: './navigation.html'
})
export class Navigation {
  isMenuOpen = signal(false);
  isScrolled = signal(false);
  
  readonly Menu = Menu;
  readonly X = X;

  navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Automatización', href: '#automatizacion' },
    { label: 'E-commerce', href: '#ecommerce' },
    { label: 'Contacto', href: '#contacto' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  scrollToSection(href: string) {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }
}
