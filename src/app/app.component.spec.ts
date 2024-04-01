import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  /*------------------------- !!! 01-ABR-22024(RJM) -------------------------------+
  | beforeEach(...); se define bloque de codigo que se ejecuta antes de cada test |
  +-------------------------------------------------------------------------------*/
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  /*--------------- !!! 01-ABR-22024(RJM) -------------+
  | las instrucciones 'it(...);' son casos de pruebas |
  +---------------------------------------------------*/
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'edteam-curso-angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('edteam-curso-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Bienbenido a edteam-curso-angular');
  });
});
