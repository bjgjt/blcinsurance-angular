import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConsumerInformationComponent } from './get-consumer-information.component';

describe('GetConsumerInformationComponent', () => {
  let component: GetConsumerInformationComponent;
  let fixture: ComponentFixture<GetConsumerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetConsumerInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetConsumerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
