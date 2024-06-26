import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PausaComponent } from './pausa.component';

describe('PausaComponent', () => {
  let component: PausaComponent;
  let fixture: ComponentFixture<PausaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PausaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PausaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
