import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithFactsComponent } from './work-with-facts.component';

describe('WorkWithFactsComponent', () => {
  let component: WorkWithFactsComponent;
  let fixture: ComponentFixture<WorkWithFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkWithFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
