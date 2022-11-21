import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primeira aula de Angular';
  nome: string = "maria";
  idade: number = 10;

  trocarNome(){
     this.nome = "Maria da Silva";
  }
}
