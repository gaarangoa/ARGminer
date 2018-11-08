import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurateComponent } from './curate.component';

describe('CurateComponent', () => {
  let component: CurateComponent;
  let fixture: ComponentFixture<CurateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
