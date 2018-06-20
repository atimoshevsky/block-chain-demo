import { Component, OnInit } from '@angular/core';
import { Block } from '../../core/block';
import { Mode } from '../../core/mode';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  block: Block;
  blockMode =  Mode.Block;
  timeStamp = '11/06/2018';

  constructor() {
  }

  ngOnInit() {
    // for empty user data, the 129039 is a right nonce
      this.block = new Block(0, this.timeStamp, '', 129039);
      this.block.CalculateHash();
  }

  onBlockChanged(block: Block) {
    this.block  = new Block(block.index, this.timeStamp, block.Data, block.Nonce, block.PreviouseHash);
  }
}
