import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUIComponent } from './interface-ui.component';

describe('InterfaceUIComponent', () => {
  let component: InterfaceUIComponent;
  let fixture: ComponentFixture<InterfaceUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceUIComponent]
    });
    fixture = TestBed.createComponent(InterfaceUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
