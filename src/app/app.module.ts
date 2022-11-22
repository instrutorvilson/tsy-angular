import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DiretivaComponent } from './diretiva/diretiva.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { HomeComponent } from './home/home.component';
import { ErroComponent } from './erro/erro.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    DiretivaComponent,
    FormReativoComponent,
    EdicaoComponent,
    HomeComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
