import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: 5</h3>

        <button (click)="restar()">-1</button>

        <span> {{numero}} </span>

        <button (click)="sumar()">+1</button>
    
    `
})
export class ContadorComponent {
    
    title = 'Contador App';

    //Variable del numero
    numero: number = 10;
  
    //base: number = 5
    base: number = 5;
  
    restar (){
      this.numero = this.numero - this.base;
    }
  
    sumar (){
      this.numero = this.numero + this.base;
    }

}