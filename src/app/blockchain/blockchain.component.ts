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
  initalNonce: Array<number> = [28343, 152168, 101917, 67021, 17682];
  mode = Mode.BlockChain;
  timeStamp = '2018/06/18';
  blockChainLength = 5;

  constructor() {
    this.blockChain = new Array<Block>();
    let previuseHash = '000000000000000000000000000000000000000000000000000000000000';
     for (let i = 0; i < this.blockChainLength; i++) {
       const block = new Block((i + 1), this.timeStamp, '', this.initalNonce[i], previuseHash);
       block.CalculateHash();
       previuseHash = block.Hash;
       this.blockChain.push(block);
     }
  }

  ngOnInit() {

  }

  onBlockChanged(block: Block) {
    this.blockChain[block.index - 1] = new Block(block.index, this.timeStamp, block.Data, block.Nonce, block.PreviouseHash);
    this.blockChain[block.index - 1].CalculateHash();
    for (let i = block.index; i < this.blockChainLength; i++) {
      this.blockChain[i] = new Block((i + 1), this.timeStamp, this.blockChain[i].Data, this.initalNonce[i], this.blockChain[i - 1].Hash);
      this.blockChain[i].CalculateHash();
    }
  }

  trackByBlocks(index: number, block: Block): number {
      return block.index;
  }
}
