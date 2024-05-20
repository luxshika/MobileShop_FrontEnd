import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneViewComponent } from './phone-view.component';

describe('PhoneViewComponent', () => {
  let component: PhoneViewComponent;
  let fixture: ComponentFixture<PhoneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
