import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Lista de Compras";
  ambiente = environment.ambiente;

  mercadorias = [
    {
      descricao:"Arroz",
      quantidade:1,
      id:1
    },
    {
      descricao:"Feijão",
      quantidade:5,
      id:2
    },
    {
      descricao:"Óleo",
      quantidade:2,
      id:3
    },
    {
      descricao:"doce",
      quantidade:12,
      id:4
    }
  ];

}