import { Component, OnInit } from '@angular/core';
import {LibrosService} from '../../services/libros.service';
import {LibroModelo} from '../../models/libros.model';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.scss']
})
export class LecturaComponent implements OnInit {
  //Atributo
  public libros!: LibroModelo[];

  //Constructor
  constructor(private servidor:LibrosService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  //Lectura de todos los libros
  public getAllBooks(){
    this.servidor.getAllBooks()
      .subscribe(res_data=>{
        this.libros = res_data as LibroModelo[];
      });
  }

  //Otro
  public imprimeConsola(imprimir:any){
    /*this.servidor.getAllBooks().subscribe(res_data=>{
      console.log(res_data);
    });*/
    console.log(imprimir);
  }

}
