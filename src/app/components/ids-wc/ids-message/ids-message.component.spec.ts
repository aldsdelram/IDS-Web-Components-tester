import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsMessageComponent } from './ids-message.component';

describe('IdsMessageComponent', () => {
  let component: IdsMessageComponent;
  let fixture: ComponentFixture<IdsMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdsMessageComponent]
    });
    fixture = TestBed.createComponent(IdsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
