import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedCounterComponent } from './typed-counter.component';

describe('TypedCounterComponent', () => {
  let component: TypedCounterComponent;
  let fixture: ComponentFixture<TypedCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
