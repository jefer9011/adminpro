import { Routes, RouterModule } from '@angular/router';


const pagesRoutes: Routes    =    [
    {

        path: '', component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]

    },
]
