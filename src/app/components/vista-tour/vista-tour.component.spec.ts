import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTourComponent } from './vista-tour.component';

describe('VistaTourComponent', () => {
  let component: VistaTourComponent;
  let fixture: ComponentFixture<VistaTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaTourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
