import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaycompComponent } from './replaycomp.component';

describe('ReplaycompComponent', () => {
  let component: ReplaycompComponent;
  let fixture: ComponentFixture<ReplaycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplaycompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplaycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
