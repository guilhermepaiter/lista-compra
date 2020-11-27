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
      id:1,
      descricao:"Arroz",
      quantidadeEstoque:2,
      quantidadeMinima:4
    },
    {
      id:2,
      descricao:"Feijão",
      quantidadeEstoque: 5,
      quantidadeMinima: 3
    },
    {
      id:3,
      descricao:"Óleo",
      quantidadeEstoque: 2,
      quantidadeMinima: 2
    },
    {
      id:4,
      descricao:"Doce",
      quantidadeEstoque: 5,
      quantidadeMinima: 5
    }
  ];

}