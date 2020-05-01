import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarcardComponent } from './starcard.component';

describe('StarcardComponent', () => {
  let component: StarcardComponent;
  let fixture: ComponentFixture<StarcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
