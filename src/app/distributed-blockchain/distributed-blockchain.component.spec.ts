import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributedBlockchainComponent } from './distributed-blockchain.component';

describe('DistributedBlockchainComponent', () => {
  let component: DistributedBlockchainComponent;
  let fixture: ComponentFixture<DistributedBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributedBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributedBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
