import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaDetalheComponent } from './vaga-detalhe.component';

describe('VagaDetalheComponent', () => {
  let component: VagaDetalheComponent;
  let fixture: ComponentFixture<VagaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
