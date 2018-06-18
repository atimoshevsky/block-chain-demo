import { Component, OnInit } from '@angular/core';
import { Block } from '../../core/block';
import { Mode } from '../../core/mode';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  blockChain: Array<Block>;
  mode = Mode.BlockChain;

  constructor() {
    this.blockChain = new Array<Block>();
    let previuseHash = '000000000000000000000000000000000000000000000000000000000000';
     for (let i = 0; i < 5; i++) {
       const block = new Block(i, '2018/06/18', '', 0, previuseHash);
       block.CalculateHash();
       previuseHash = block.Hash;
       this.blockChain.push(block);
     }
  }

  ngOnInit() {

  }

}
