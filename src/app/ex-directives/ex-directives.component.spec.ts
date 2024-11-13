import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExDirectivesComponent } from './ex-directives.component';

describe('ExDirectivesComponent', () => {
  let component: ExDirectivesComponent;
  let fixture: ComponentFixture<ExDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
