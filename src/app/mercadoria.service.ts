import { Injectable } from '@angular/core';
import { LISTA_MERCADORIAS } from './base-mercadorias';
import { Mercadoria } from './mercadoria';

@Injectable({
   providedIn: 'root'
})
export class MercadoriaService {

    constructor() {}

    getMercadorias(): Mercadoria[] {
        return LISTA_MERCADORIAS;
    }

    getMercadoria(id: number): Mercadoria {        
       return LISTA_MERCADORIAS[id-1];
    }

}

