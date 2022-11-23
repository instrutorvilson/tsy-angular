import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdmService } from './auth-adm.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { ErroComponent } from './erro/erro.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate:[AuthAdmService]
  },
  {
    path:'formreativo',
    component: FormReativoComponent
  },
  {
    path:'editar/:idcontato',
    component: EdicaoComponent
  },
  {
     path:'login',
     component: LoginComponent

  },
  {
    path:'info/:mensagem',
    component: InfoComponent

  },
  {
    path: '**',
    component: ErroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
