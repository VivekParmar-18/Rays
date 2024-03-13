import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { authGuard } from './service/auth/auth.guard';

const routes: Routes = [{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'login',component : LoginComponent},
{path: 'register' ,component : RegisterComponent},
{path: 'welcome' ,component : WelcomeComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
