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
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    DiretivaComponent,
    FormReativoComponent,
    EdicaoComponent,
    HomeComponent,
    ErroComponent,
    LoginComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
