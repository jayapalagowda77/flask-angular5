import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'user', component: UserComponent, children: [
        // { path: '', component: ListComponent},
        { path: 'register', component: RegisterComponent},
        { path: 'login', component: LoginComponent}
    ] }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
