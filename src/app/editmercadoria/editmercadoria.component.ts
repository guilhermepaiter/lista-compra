import { Component, OnInit } from '@angular/core';
import { MercadoriaService } from '../mercadoria.service';
import { Mercadoria } from '../mercadoria';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmercadoria',
  templateUrl: './editmercadoria.component.html',
  styleUrls: ['./editmercadoria.component.css']
})
export class EditMercadoriaComponent implements OnInit {

  mercadoria : Mercadoria;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mercadoriaService: MercadoriaService) { }

  ngOnInit(): void {
    this.getMercadoria();
  }

  getMercadoria(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.mercadoria = this.mercadoriaService.getMercadoria(Number(id));
  }

  salvarMercadoria() { 
    this.router.navigateByUrl('/mercadorias');
  
  }

  salvarMercadoria2 = function () {
    this.router.navigateByUrl('/mercadorias');
  };

}
