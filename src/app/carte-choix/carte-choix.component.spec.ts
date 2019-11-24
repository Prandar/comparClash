import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteChoixComponent } from './carte-choix.component';

describe('CarteChoixComponent', () => {
  let component: CarteChoixComponent;
  let fixture: ComponentFixture<CarteChoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteChoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
