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

  salvar(dados:IContato){
    return this.http.post<IContato>("http://localhost:3000/contatos",dados)
  }
}
