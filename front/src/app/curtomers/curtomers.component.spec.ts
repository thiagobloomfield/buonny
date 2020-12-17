import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtomersComponent } from './curtomers.component';

describe('CurtomersComponent', () => {
  let component: CurtomersComponent;
  let fixture: ComponentFixture<CurtomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurtomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
