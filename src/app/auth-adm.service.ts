import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import jwt from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthAdmService implements CanActivate {

  constructor(private router: Router) { }

  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token = localStorage.getItem('token') || '' 
    if(token == ''){
      this.router.navigate(['login'])
    }
    //let tokenDecoded = JSON.stringify(jwt(token))
    //let user = JSON.parse(tokenDecoded)
     let user:any = jwt(token)

   // if(user.authorities.indexOf("ROLE_ADMIN") == -1){
    if(user.authorities[0].indexOf("ADMIN") == -1){
      this.router.navigate(['info/Precisa ser um administador'])
    }
    return true
  }
}
