import { Component, OnInit } from '@angular/core';
import { BlockTransaction } from '../../core/block-transaction';
import { Mode } from '../../core/mode';


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  mode: Mode =  Mode.Tokens;

  blockTransaction: BlockTransaction[] = [
    new BlockTransaction(1, 100, 'Alex', 'Vika'),
    new BlockTransaction(2, 30, 'Vika', 'Mama'),
    new BlockTransaction(3, 30, 'Vika', 'Papa')
];
  constructor() { }

  ngOnInit() {
  }

}
