import { Component } from '@angular/core';

interface IContato{
  nome: string,
  email: string,
  fone: string
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
 // contato:IContato = {nome:'',email:'',fone:''}  
  contato:IContato  
  
   contatos: IContato[] = [
    {nome:'jose',email:'jose@gmail.com',fone:'(47)9987-1243'},
    {nome:'maria',email:'maria@gmail.com',fone:'(47)9987-1244'},
    {nome:'joao',email:'joao@gmail.com',fone:'(47)9987-1245'}
  ]
   
   constructor(){
    this.contato = {nome:'',email:'',fone:''} 
   }

   enviar(dados:IContato){
       this.contatos.push(dados)  
    }
}
