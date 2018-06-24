import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBlockDataTableComponent } from './simple-block-data-table.component';

describe('SimpleBlockDataTableComponent', () => {
  let component: SimpleBlockDataTableComponent;
  let fixture: ComponentFixture<SimpleBlockDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleBlockDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBlockDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
