import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IContato from 'src/interfaces/interface';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {
  contato: IContato = {nome:"",email:"",fone:""}
  msg: string = ''

  constructor(private route: ActivatedRoute, private service:CadastroService){      
  }

  ngOnInit(): void {
    var routeParams = this.route.snapshot.paramMap    
    let id = parseInt(routeParams.get('idcontato')||'')
    this.service.consultarPorId(id).subscribe(data => this.contato = data)
  }

  alterar(){
    this.service.alterar(this.contato.id || 0, this.contato).subscribe(() => this.msg = "Registro alterado com sucesso" )
  }

  excluir(){
    this.service.excluir(this.contato.id || 0).subscribe(()=> this.msg = "Resgistro excluido com sucesso" )
  }

}
