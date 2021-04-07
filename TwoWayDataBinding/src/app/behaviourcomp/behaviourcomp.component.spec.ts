import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourcompComponent } from './behaviourcomp.component';

describe('BehaviourcompComponent', () => {
  let component: BehaviourcompComponent;
  let fixture: ComponentFixture<BehaviourcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviourcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviourcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
