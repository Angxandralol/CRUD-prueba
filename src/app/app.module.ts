//Formularios
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Servicios
import {LibrosService} from './services/libros.service';
import {NuevoLibroService} from './services/nuevo-libro.service';
//Componentes
import { LecturaComponent } from './components/lectura/lectura.component';
import { CreacionComponent } from './components/creacion/creacion.component';
@NgModule({
  declarations: [
    AppComponent,
    LecturaComponent,
    CreacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [LibrosService, NuevoLibroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
