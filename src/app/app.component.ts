import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly theBestProperty = "Lista de Compras";

  title = this.theBestProperty;
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
      quantidadeEstoque: 4,
      quantidadeMinima: 3
    },
    {
      id: 4,
      descricao:"Doce",
      quantidadeEstoque: 2,
      quantidadeMinima: 20
    }
  ]

  novaMercadoria = {
    id:5,
    descricao: "Pipoca",
    quantidadeEstoque: 1,
    quantidadeMinima: 5
  }
  
  adicionarMercadoria() {
    this.mercadorias.push({
      id:this.novaMercadoria.id,
      descricao:this.novaMercadoria.descricao,
      quantidadeEstoque:this.novaMercadoria.quantidadeEstoque,
      quantidadeMinima:this.novaMercadoria.quantidadeMinima
    })
  }
}