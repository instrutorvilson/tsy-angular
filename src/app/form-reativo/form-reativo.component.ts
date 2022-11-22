import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent {
   
  formContato = new FormGroup({
      nome: new FormControl('Jose'),
      email: new FormControl('jose@gmail.com'),
      fone: new FormControl('(47)9999-0987')
    })

    
  
    //formcontrol
    nome = new FormControl('Maria das dores')
    idade = new FormControl(25)
    enviar(){
      console.log(`Nome ${this.nome.value} \n Idade: ${this.idade.value}`)
    }
}
