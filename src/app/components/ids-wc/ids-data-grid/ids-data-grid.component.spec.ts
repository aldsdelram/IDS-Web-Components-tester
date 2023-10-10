import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsDataGridComponent } from './ids-data-grid.component';

describe('IdsDataGridComponent', () => {
  let component: IdsDataGridComponent;
  let fixture: ComponentFixture<IdsDataGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdsDataGridComponent]
    });
    fixture = TestBed.createComponent(IdsDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
