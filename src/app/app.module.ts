import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditMercadoriaComponent } from './editmercadoria/editmercadoria.component';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    EditMercadoriaComponent,
    MercadoriasComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
