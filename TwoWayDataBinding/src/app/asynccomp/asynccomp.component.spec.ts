import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynccompComponent } from './asynccomp.component';

describe('AsynccompComponent', () => {
  let component: AsynccompComponent;
  let fixture: ComponentFixture<AsynccompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynccompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynccompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
