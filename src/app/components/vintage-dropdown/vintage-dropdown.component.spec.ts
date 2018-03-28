import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VintageDropdownComponent } from './vintage-dropdown.component';

describe('VintageDropdownComponent', () => {
  let component: VintageDropdownComponent;
  let fixture: ComponentFixture<VintageDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VintageDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VintageDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
