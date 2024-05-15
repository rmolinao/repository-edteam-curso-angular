import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaDigitalComponent } from './escuela-digital.component';

describe('EscuelaDigitalComponent', () => {
  let component: EscuelaDigitalComponent;
  let fixture: ComponentFixture<EscuelaDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscuelaDigitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscuelaDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
