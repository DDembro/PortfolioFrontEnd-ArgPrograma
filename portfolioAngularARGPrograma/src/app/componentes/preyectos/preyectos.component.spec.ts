import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreyectosComponent } from './preyectos.component';

describe('PreyectosComponent', () => {
  let component: PreyectosComponent;
  let fixture: ComponentFixture<PreyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
