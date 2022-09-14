import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',    
  })

export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor","Capitan America"];
  heroeBorrado: string = "";




  /*
  Metodo para borrar elementos de un array
  */
  borrarHeroe(){
    console.log("Borrando...");
    let heroesBorrados = this.heroes.shift();
    this.heroeBorrado = heroesBorrados || "";//Devuelve el heroe borrado del array
    console.log(heroesBorrados);
  }

}
