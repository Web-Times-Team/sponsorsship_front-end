import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComittedToDataComponent } from './comitted-to-data.component';

describe('ComittedToDataComponent', () => {
  let component: ComittedToDataComponent;
  let fixture: ComponentFixture<ComittedToDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComittedToDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComittedToDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
