import { Component, Input, OnInit } from '@angular/core';
import { BlockTransaction } from '../../../core/block-transaction';

@Component({
  selector: 'app-simple-block-data-table',
  templateUrl: './simple-block-data-table.component.html',
  styleUrls: ['./simple-block-data-table.component.css']
})
export class SimpleBlockDataTableComponent implements OnInit {
  @Input() dataSource: BlockTransaction;
  displayedColumns = ['id', 'amount', 'from', 'to'];
  constructor() { }

  ngOnInit() {
  }

}
