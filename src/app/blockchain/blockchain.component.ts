import { Component, OnInit } from '@angular/core';
import { Block } from '../../core/block';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  blockChain =  new Array[5];
  constructor() {
    // for (let i = 0; i < 5; i++) {
    //   const block = new Block(i, '2018/06/15', '', '0');
    //   block.CalculateHash();
    //   this.blockChain.push(block);
    // }
  }

  ngOnInit() {

  }

}
