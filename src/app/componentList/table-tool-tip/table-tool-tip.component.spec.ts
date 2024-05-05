import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToolTipComponent } from './table-tool-tip.component';

describe('TableToolTipComponent', () => {
  let component: TableToolTipComponent;
  let fixture: ComponentFixture<TableToolTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableToolTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
