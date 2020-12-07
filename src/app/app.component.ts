import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LISTA_MERCADORIAS } from './base-mercadorias';
import { MercadoriaService } from './mercadoria.service';
import { Mercadoria } from './mercadoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly theBestProperty = environment.titulo;

  title = this.theBestProperty;
  ambiente = environment.ambiente;

  mercadorias: Mercadoria[];

  novaMercadoria = {
    id: 5,
    descricao: 'Pipoca',
    quantidadeEstoque: 1,
    quantidadeMinima: 5
  };

  // tslint:disable-next-line: typedef
  adicionarMercadoria() {
    this.mercadorias.push({
      id: this.novaMercadoria.id,
      descricao: this.novaMercadoria.descricao,
      quantidadeEstoque: this.novaMercadoria.quantidadeEstoque,
      quantidadeMinima: this.novaMercadoria.quantidadeMinima
    });
  }

  constructor(private mercadoriaService: MercadoriaService){}

  ngOnInit() {
    this.getMercadorias();
  }

  getMercadorias(): void{
    this.mercadorias = this.mercadoriaService.getMercadorias();
  }
}
