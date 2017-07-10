import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdbComponent } from './ardb.component';

describe('ArdbComponent', () => {
  let component: ArdbComponent;
  let fixture: ComponentFixture<ArdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
