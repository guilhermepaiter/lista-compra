import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMercadoriaComponent } from './editmercadoria.component';

describe('EditmercadoriaComponent', () => {
  let component: EditMercadoriaComponent;
  let fixture: ComponentFixture<EditMercadoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMercadoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMercadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
