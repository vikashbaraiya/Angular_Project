import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacultylistComponent } from './addfacultylist.component';

describe('AddfacultylistComponent', () => {
  let component: AddfacultylistComponent;
  let fixture: ComponentFixture<AddfacultylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfacultylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfacultylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
