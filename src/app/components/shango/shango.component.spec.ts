import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShangoComponent } from './shango.component';

describe('ShangoComponent', () => {
  let component: ShangoComponent;
  let fixture: ComponentFixture<ShangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShangoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
