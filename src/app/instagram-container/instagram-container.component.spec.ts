import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramContainerComponent } from './instagram-container.component';

describe('InstagramContainerComponent', () => {
  let component: InstagramContainerComponent;
  let fixture: ComponentFixture<InstagramContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
