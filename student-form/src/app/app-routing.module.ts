import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatestudentComponent } from './components/createstudent/createstudent.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component'; 
import { GetstudentComponent } from './components/getstudent/getstudent.component';
import { DeletestudentComponent } from './components/deletestudent/deletestudent.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to HomeComponent
  { path: 'home', component: HomeComponent },
  { path: 'student', component: CreatestudentComponent },
  { path : 'update', component : UpdatestudentComponent},
  { path : 'get', component : GetstudentComponent},
  { path : 'delete', component : DeletestudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
