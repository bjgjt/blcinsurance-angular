import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsumerHistoryComponent } from './add-consumer-history.component';

describe('AddConsumerHistoryComponent', () => {
  let component: AddConsumerHistoryComponent;
  let fixture: ComponentFixture<AddConsumerHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsumerHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsumerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
