import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrderManagementComponent } from './modal-order-management.component';

describe('ModalOrderManagementComponent', () => {
  let component: ModalOrderManagementComponent;
  let fixture: ComponentFixture<ModalOrderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOrderManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOrderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
