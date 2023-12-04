import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachesComponent } from './attaches.component';

describe('AttachesComponent', () => {
  let component: AttachesComponent;
  let fixture: ComponentFixture<AttachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
