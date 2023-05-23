import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassPresentationComponent } from './class-presentation.component';

describe('ClassPresentationComponent', () => {
  let component: ClassPresentationComponent;
  let fixture: ComponentFixture<ClassPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
