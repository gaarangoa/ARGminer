import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniprotComponent } from './uniprot.component';

describe('UniprotComponent', () => {
  let component: UniprotComponent;
  let fixture: ComponentFixture<UniprotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniprotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
