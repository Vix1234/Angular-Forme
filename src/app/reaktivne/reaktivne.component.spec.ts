import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaktivneComponent } from './reaktivne.component';

describe('ReaktivneComponent', () => {
  let component: ReaktivneComponent;
  let fixture: ComponentFixture<ReaktivneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaktivneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaktivneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
