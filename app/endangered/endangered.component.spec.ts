import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndangeredComponent } from './endangered.component';

describe('EndangeredComponent', () => {
  let component: EndangeredComponent;
  let fixture: ComponentFixture<EndangeredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndangeredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndangeredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
