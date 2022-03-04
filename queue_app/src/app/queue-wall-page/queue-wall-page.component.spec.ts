import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueWallPageComponent } from './queue-wall-page.component';

describe('QueueWallPageComponent', () => {
  let component: QueueWallPageComponent;
  let fixture: ComponentFixture<QueueWallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueWallPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueWallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
