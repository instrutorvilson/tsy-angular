import { Component } from '@angular/core';
import  IContato  from '../../interfaces/interface'
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
 // contato:IContato = {nome:'',email:'',fone:''}  
 /* contato:IContato  
  
   contatos: IContato[] = [
    {nome:'jose',email:'jose@gmail.com',fone:'(47)9987-1243'},
    {nome:'maria',email:'maria@gmail.com',fone:'(47)9987-1244'},
    {nome:'joao',email:'joao@gmail.com',fone:'(47)9987-1245'}
  ]
   
   constructor(private service:CadastroService){
        this.contato = {nome:'',email:'',fone:''} 
   }*/
   msg: string = ''
   contatos: IContato[] = []
   constructor(private service:CadastroService){
     this.consultar()
   }


   enviar(dados:IContato){
      // this.contatos.push(dados)  
      this.service.salvar(dados).subscribe(data => {
        this.msg = "registro salvo com sucesso"
        //window.location.reload()
        this.contatos = [...this.contatos, data]
      } )
    }

   consultar(){
      this.service.consultar().subscribe(data => this.contatos = data)
   } 


}
