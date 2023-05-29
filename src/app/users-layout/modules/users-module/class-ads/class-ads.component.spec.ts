import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAdsComponent } from './class-ads.component';

describe('ClassAdsComponent', () => {
  let component: ClassAdsComponent;
  let fixture: ComponentFixture<ClassAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
