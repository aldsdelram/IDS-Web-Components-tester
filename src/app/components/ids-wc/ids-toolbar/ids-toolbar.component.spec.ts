import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsToolbarComponent } from './ids-toolbar.component';

describe('IdsToolbarComponent', () => {
  let component: IdsToolbarComponent;
  let fixture: ComponentFixture<IdsToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdsToolbarComponent]
    });
    fixture = TestBed.createComponent(IdsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
