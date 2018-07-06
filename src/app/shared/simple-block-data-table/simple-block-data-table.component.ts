import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { BlockTransaction } from '../../../core/block-transaction';

@Component({
  selector: 'app-simple-block-data-table',
  templateUrl: './simple-block-data-table.component.html',
  styleUrls: ['./simple-block-data-table.component.css']
})
export class SimpleBlockDataTableComponent implements OnInit {
  @Input() blockTransactions: string;
  @Output() transactionChanged = new EventEmitter<string>();
  transactions: Array<BlockTransaction>;

  constructor() { }

  ngOnInit() {
    this.transactions = JSON.parse(this.blockTransactions);

  }

  trackByTransaction(transaction: BlockTransaction): number {
    return transaction.id;
  }

  onDataKey(event: any) {
    this.transactions[event.target.id].amount = +event.target.value;
    this.transactionChanged.emit(JSON.stringify(this.transactions));
  }
}
