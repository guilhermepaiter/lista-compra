import { Injectable } from '@angular/core';
import { constructor } from 'console';
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


}

