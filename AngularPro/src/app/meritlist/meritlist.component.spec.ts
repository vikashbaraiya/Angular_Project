import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritlistComponent } from './meritlist.component';

describe('MeritlistComponent', () => {
  let component: MeritlistComponent;
  let fixture: ComponentFixture<MeritlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeritlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeritlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
