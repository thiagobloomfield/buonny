import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductManagementComponent } from './modal-product-management.component';

describe('ModalProductManagementComponent', () => {
  let component: ModalProductManagementComponent;
  let fixture: ComponentFixture<ModalProductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProductManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
