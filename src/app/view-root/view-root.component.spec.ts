import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRootComponent } from './view-root.component';

describe('ViewRootComponent', () => {
  let component: ViewRootComponent;
  let fixture: ComponentFixture<ViewRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
