import { Component, OnInit } from '@angular/core';
import { environment }       from 'src/environments/environment';
import { MercadoriaService } from '../mercadoria.service';
import { Mercadoria }        from '../mercadoria';

// import { LISTA_MERCADORIAS } from '../base-mercadorias';


@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {
  
    private readonly theBestProperty = environment.titulo;
  
    title = this.theBestProperty;
    
    ambiente = environment.ambiente;
  
    mercadorias: Mercadoria[];
  
    constructor(private mercadoriaService: MercadoriaService){}
  
    ngOnInit() {
      this.getMercadorias();
    }
  
    getMercadorias(): void{
      this.mercadorias = this.mercadoriaService.getMercadorias();
    }
    
}
  