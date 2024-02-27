import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatestudentComponent } from './components/createstudent/createstudent.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { GetstudentComponent } from './components/getstudent/getstudent.component';
import { DeletestudentComponent } from './components/deletestudent/deletestudent.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatestudentComponent,
    UpdatestudentComponent,
    DeletestudentComponent,
    GetstudentComponent,OrderByPipe, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
