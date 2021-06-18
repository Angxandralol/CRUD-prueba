import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LibroModelo} from '../models/libros.model';

@Injectable({
  providedIn: 'root'
})
export class NuevoLibroService {
  //Atributos
  private url: string = 'http://localhost:3000/allBooks';
  public libro: LibroModelo;

  //Constructor
  constructor(private http:HttpClient) {
    this.libro = new LibroModelo();
  }
  
  //Metodos
  public postAddBook(libro:LibroModelo){
    return this.http.post(this.url, libro);
  }
}
