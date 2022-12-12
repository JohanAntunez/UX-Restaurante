import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBebidasComponent } from './list-bebidas.component';

describe('ListBebidasComponent', () => {
  let component: ListBebidasComponent;
  let fixture: ComponentFixture<ListBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBebidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
