import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LibroModelo} from '../../models/libros.model';
import {NuevoLibroService} from '../../services/nuevo-libro.service';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss']
})
export class CreacionComponent implements OnInit {
  //Atributos
  public libro:LibroModelo;

  //Constructor
  constructor(private servidor:NuevoLibroService) {
    this.libro = new LibroModelo();
  }

  ngOnInit(): void {
  }

  //Llamamiento para la creacion de un Libro
  public addBook(form:NgForm){
    this.servidor.postAddBook(this.newBook(form)).subscribe(data=>{
      alert('Nuevo Libro añadido a la base de datos');
      form.reset();
    });
  }
  //Asignacion de valores para la creacion del libro
  public newBook(form:NgForm){
    let libro:LibroModelo = new LibroModelo();
    libro.n_referencia = form.value.n_referencia;
    libro.titulo = form.value.titulo;
    libro.descripcion = form.value.descripcion;
    return libro;
  }

}
