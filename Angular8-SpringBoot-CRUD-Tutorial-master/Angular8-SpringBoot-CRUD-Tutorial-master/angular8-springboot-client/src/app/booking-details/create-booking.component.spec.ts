import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookingComponent } from './create-booking.component';

describe('CreateEmployeeComponent', () => {
  let component: CreatebookingComponent;
  let fixture: ComponentFixture<CreatebookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
