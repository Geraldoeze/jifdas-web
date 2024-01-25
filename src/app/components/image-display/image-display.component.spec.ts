import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDisplayComponent } from './image-display.component';

describe('ImageDisplayComponent', () => {
  let component: ImageDisplayComponent;
  let fixture: ComponentFixture<ImageDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDisplayComponent]
    });
    fixture = TestBed.createComponent(ImageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
