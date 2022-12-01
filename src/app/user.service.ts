import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Njk5Nzk4NTcsInVzZXJfbmFtZSI6ImpvYW5hQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiNzk3ZmFhZWItYTM1ZS00ZjAxLWEyYzAtNjY5MTIwYjk3NDAxIiwiY2xpZW50X2lkIjoidHN5c3RlbSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.mKYInaH_iC-I4i2C79m7-Qj3JFuxdZsVPgqJXOSmm-g'
  constructor(private http: HttpClient) { }

  consultarUsers(){
    return this.http.get('http://localhost:8081/usuarios')
  }

  salvar(payload: any){
    var header = new HttpHeaders({'Authorization': 'Bearer ' + this.token });
    return this.http.post('http://localhost:8081/categorias', payload, { headers: header })
  }

 consultarCategorias(){ 
  var header = new HttpHeaders();
     header = header.append('Authorization', 'Bearer ' + this.token)
     /*header.append('Access-Control-Allow-Headers', 'Content-Type');
     header.append('Access-Control-Allow-Methods', 'GET');
     header = header.append('Access-Control-Allow-Origin', '*')*/
     return this.http.get('http://localhost:8081/categorias', { headers: header })
 }

 /**https://stackoverflow.com/questions/68525836/the-mandatory-grant-type-permission-is-missing-when-calling-post-request-from */
 logar(){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('tsystem:tsystem123') });
    headers.append('Content-Type', 'application/x-www-form-urlencoded')   
    
   /* const body = new HttpParams();
    body.set('username', 'joana@gmail.com');
    body.set('password', '123456');
    body.set('grant_type', 'password');
    */
    //const body = 'grant_type=password&username=joana@gmail.com&password=12345'
   //var body = "grant_type=password&username=ana@gmail.com&password=123456";
   const body = new FormData();
   body.append('grant_type', 'password');
   body.append('username', 'joana@gmail.com');
   body.append('password', '123456');

    return this.http.post('http://localhost:8081/oauth/token', body , {headers});
 }
}
