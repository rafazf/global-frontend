import { Routes } from "@angular/router";
import { EmployeesComponent } from "./employees.component";
import { RegistrationComponent } from "./pages/registration/registration.component";
import { ConsultationComponent } from "./pages/consultation/consultation.component";
import { EditionComponent } from "./pages/edition/edition.component";

export const EMPLOYEES_ROUTES:Routes = [
    {
        path: '',title:'Empleados',component:EmployeesComponent,
        children:[
            {
                path:'',component:ConsultationComponent
            },
            {
                path:'registro',title:'Registro de Empleados',component:RegistrationComponent
            },
            {
                path:'editar',title:'Editar',component:EditionComponent
            }
        ]
    }
]