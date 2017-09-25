import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClassifyComponent } from './classify/classify.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

export const router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'classify', component: ClassifyComponent },
    { path: 'home', component: HomeComponent },
    { path: 'database', component: DatabaseComponent },
    { path: 'about', component: AboutComponent },
    { path: 'admin', component: AdminComponent },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(router);

