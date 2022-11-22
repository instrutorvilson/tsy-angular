import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  IContato  from '../interfaces/interface'


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  consultar(){
    return this.http.get<[IContato]>("http://localhost:3000/contatos")
  }

  consultarPorId(id:number){
    return this.http.get<IContato>(`http://localhost:3000/contatos/${id}`)
  }

  excluir(id:number){
    return this.http.delete(`http://localhost:3000/contatos/${id}`)
  }
  
  alterar(id:number, dados: IContato){
    return this.http.put<IContato>(`http://localhost:3000/contatos/${id}`, dados)
  }
  
  salvar(dados:IContato){
    return this.http.post<IContato>("http://localhost:3000/contatos",dados)
  }
}
