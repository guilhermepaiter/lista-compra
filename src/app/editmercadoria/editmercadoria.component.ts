import { Component, OnInit } from '@angular/core';
import { Mercadoria } from '../mercadoria';

@Component({
  selector: 'app-editmercadoria',
  templateUrl: './editmercadoria.component.html',
  styleUrls: ['./editmercadoria.component.css']
})
export class EditMercadoriaComponent implements OnInit {

  mercadoria = {
    id: null,
    descricao: null,
    quantidadeEstoque: null,
    quantidadeMinima: null
  };

  constructor() { }

  ngOnInit(): void {

  }

  adicionarMercadoria() {
    /*
      this.mercadorias.push({
      id: this.novaMercadoria.id,
      descricao: this.novaMercadoria.descricao,
      quantidadeEstoque: this.novaMercadoria.quantidadeEstoque,
      quantidadeMinima: this.novaMercadoria.quantidadeMinima
    });
    */
  }

}
