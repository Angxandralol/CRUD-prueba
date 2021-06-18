import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  //Atributos
  private url: string = 'http://localhost:3000';

  //Constructor
  constructor(private http:HttpClient) {}

  //Lectura
  public getAllBooks(){
    return this.http.get(`${this.url}/allBooks`);
  }
}
