import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user.routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [RegisterComponent, LoginComponent, UserComponent, UserListComponent],
  providers: [UserService]
})
export class UserModule { }
