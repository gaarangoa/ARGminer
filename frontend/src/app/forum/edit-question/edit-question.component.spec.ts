import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionComponent } from './edit-question.component';

describe('EditQuestionComponent', () => {
  let component: EditQuestionComponent;
  let fixture: ComponentFixture<EditQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
