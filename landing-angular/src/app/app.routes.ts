import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Demo } from './demo/demo';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'demo', component: Demo },
    { path: '**', redirectTo: '' }
];
