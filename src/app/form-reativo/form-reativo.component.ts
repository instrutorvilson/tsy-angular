import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent {
    nome = new FormControl('Maria das dores')
    idade = new FormControl(25)
    enviar(){
      console.log(`Nome ${this.nome.value} \n Idade: ${this.idade.value}`)
    }
}
