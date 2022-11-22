import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { ErroComponent } from './erro/erro.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path:'formreativo',
    component: FormReativoComponent
  },
  {
    path:'editar/:email',
    component: EdicaoComponent
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
