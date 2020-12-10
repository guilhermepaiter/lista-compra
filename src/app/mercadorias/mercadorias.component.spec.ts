import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoriasComponent } from './mercadorias.component';

describe('MercadoriasComponent', () => {
  let component: MercadoriasComponent;
  let fixture: ComponentFixture<MercadoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
