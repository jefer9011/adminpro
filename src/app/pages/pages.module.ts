import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

// rutas hijas
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations:    [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component

    ],
    exports: [
        // Exportar paginas para que se pueda tbajar con ellas en otros modulos
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],

    imports:    [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule    {}
