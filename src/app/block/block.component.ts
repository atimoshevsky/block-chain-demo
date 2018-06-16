import { Component, OnInit } from '@angular/core';
import { Block } from '../../core/block';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  block: Block;

  constructor() {
  }

  ngOnInit() {
    // for empty user data, the 129039 is a right nonce
      this.block = new Block(0, '11/06/2018', '', 129039);
      this.block.CalculateHash();
  }
}
