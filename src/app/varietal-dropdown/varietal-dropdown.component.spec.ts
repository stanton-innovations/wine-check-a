import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietalDropdownComponent } from './varietal-dropdown.component';

describe('VarietalDropdownComponent', () => {
  let component: VarietalDropdownComponent;
  let fixture: ComponentFixture<VarietalDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarietalDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietalDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
