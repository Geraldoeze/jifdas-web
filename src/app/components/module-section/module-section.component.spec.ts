import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSectionComponent } from './module-section.component';

describe('ModuleSectionComponent', () => {
  let component: ModuleSectionComponent;
  let fixture: ComponentFixture<ModuleSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleSectionComponent]
    });
    fixture = TestBed.createComponent(ModuleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
