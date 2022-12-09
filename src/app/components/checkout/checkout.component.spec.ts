import { ComponentFixture, TestBed } from '@angular/core/testing';

import { checkoutComponent } from './checkout.component';

describe('checkoutComponent', () => {
  let component: checkoutComponent;
  let fixture: ComponentFixture<checkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ checkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(checkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
