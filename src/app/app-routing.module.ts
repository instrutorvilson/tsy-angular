import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';

const routes: Routes = [
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
