import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { MercadoriasComponent } from './mercadorias/mercadorias.component';
import { EditMercadoriaComponent } from './editmercadoria/editmercadoria.component';
import { UserComponent } from './user/user.component';


// Minha lista de rotas
const routes : Routes = [
  { path: '', redirectTo:'/mercadorias', pathMatch: 'full'},
  { path: 'mercadorias', component: MercadoriasComponent },
  { path: 'mercadorias/edit/:id', component: EditMercadoriaComponent },
  { path: 'users', component: UserComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
