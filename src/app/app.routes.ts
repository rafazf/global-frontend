import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',redirectTo:'empleados',pathMatch:'full'
    },
    {
        path:'empleados',loadChildren:()=>import('./MOD/employees/employees.routes').then(m=>m.EMPLOYEES_ROUTES)
    }
];
