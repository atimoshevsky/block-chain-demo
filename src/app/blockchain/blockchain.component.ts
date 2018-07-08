import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../../core/block';
import { Mode } from '../../core/mode';
import { BlockTransaction } from '../../core/block-transaction';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {
  @Input() mode: Mode = Mode.BlockChain;
  @Input() blockchainTitle = 'Blockchain';
  @Input() tokenInitalNonce: Array<number>;
  @Input() tokenInitalAmounts: Array<number>;
  @Input() tokenInitalNames: Array<Array<string>>;

  blockChain: Array<Block>;
  initalNonce: Array<number> = [85817, 56043, 118847, 3979, 38337];
  timeStamp = '2018/06/18';
  blockChainLength = 5;

  constructor() {
  }

  ngOnInit() {
    this.blockChain = new Array<Block>();
    let previuseHash = '000000000000000000000000000000000000000000000000000000000000';
    for (let i = 0; i < this.blockChainLength; i++) {
      let block = null;
      if (this.mode === Mode.Tokens) {
        block = new Block(i, this.timeStamp, JSON.stringify(this.buildTransaction(i)), this.tokenInitalNonce[i], previuseHash);
      } else {
        block = new Block(i, this.timeStamp, '', this.initalNonce[i], previuseHash);
      }

      block.CalculateHash();
      previuseHash = block.Hash;
      this.blockChain.push(block);
    }
  }

  onBlockChanged(block: Block) {
    this.blockChain[block.index] = new Block(block.index, this.timeStamp, block.Data, block.Nonce, block.PreviouseHash);
    this.blockChain[block.index].CalculateHash();
    for (let i = block.index + 1; i < this.blockChainLength; i++) {
      this.blockChain[i] = new Block(i, this.timeStamp, this.blockChain[i].Data, this.blockChain[i].Nonce, this.blockChain[i - 1].Hash);
      this.blockChain[i].CalculateHash();
    }
  }

  trackByBlocks(index: number, block: Block): number {
    return block.index;
  }

  buildTransaction(blockNumber: number): Array<BlockTransaction> {
    const transactionCount = 5 % blockNumber === 1 ? blockNumber : 3;
    const transactions = new Array<BlockTransaction>();

    for (let i = 0; i < transactionCount; i++) {
      let transaction = null;
      transaction = new BlockTransaction(i, this.tokenInitalAmounts[blockNumber * transactionCount + i],
        this.tokenInitalNames[blockNumber * transactionCount + i][0],
        this.tokenInitalNames[blockNumber * transactionCount + i][1]);
      transactions.push(transaction);
    }
    return transactions;

  }
}
