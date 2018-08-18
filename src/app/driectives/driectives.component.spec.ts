import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriectivesComponent } from './driectives.component';

describe('DriectivesComponent', () => {
  let component: DriectivesComponent;
  let fixture: ComponentFixture<DriectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
