import { Component, Input, OnInit } from '@angular/core';
import { BlockTransaction } from '../../../core/block-transaction';

@Component({
  selector: 'app-simple-block-data-table',
  templateUrl: './simple-block-data-table.component.html',
  styleUrls: ['./simple-block-data-table.component.css']
})
export class SimpleBlockDataTableComponent implements OnInit {
  @Input() blockTransactions: string;
  transactions: Array<BlockTransaction>;

  constructor() { }

  ngOnInit() {
    this.transactions = JSON.parse(this.blockTransactions);

  }

  trackByTransaction(transaction: BlockTransaction): number {
    return transaction.id;
  }

  onDataKey(event: any) {
    console.log(event);
  }


}
