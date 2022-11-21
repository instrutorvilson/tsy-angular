import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent {
  mostrar: boolean = false
  rotulo: string = "show"
  showHide(){
    if(this.mostrar){
      this.mostrar = false
      this.rotulo = "show"
    }
    else{
      this.mostrar = true
      this.rotulo = "hide"
    }
  }

  carros: any = ["Fusca", "Brasilia", "Kombi", "TL", "Rural Willis"]

  contatos: any = [
    { 
      nome: "José", 
      email: "jose@gmail.com", 
      fone: "(47)9876-1234"
    },
    { 
      nome: "maria", 
      email: "maria@gmail.com", 
      fone: "(47)9876-1235"
    },
    { 
      nome: "Antonio", 
      email: "antonio@gmail.com", 
      fone: "(47)9876-1236"
    }
  ]
}
