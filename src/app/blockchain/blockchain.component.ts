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
  blockChain: Array<Block>;
  initalNonce: Array<number> = [28343, 152168, 101917, 67021, 17682];
  initalNames: Array<string> = ['Vika', 'Adam', 'Gerry', 'Lukasz', 'Misha', 'Varvara',
    'Wojciech', 'Tim', 'Allan', 'James', 'Marcin', 'Tomasz', 'Mariusz', 'Dimitri', 'Kasper', 'Julia',
    'Sveta'];
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
         block = new Block((i + 1), this.timeStamp, JSON.stringify(this.buildTransaction()), this.initalNonce[i], previuseHash);
      } else {
        block = new Block((i + 1), this.timeStamp, '', this.initalNonce[i], previuseHash);
      }

      block.CalculateHash();
      previuseHash = block.Hash;
      this.blockChain.push(block);
    }
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

  buildTransaction(): Array<BlockTransaction> {
    const transactionCount = 5;
    const transactions = new Array<BlockTransaction>();
    for (let i = 0; i < transactionCount; i++) {
      let transaction = null;
      transaction = new BlockTransaction(i, this.randomInt(10, 95),
                                          this.initalNames[this.randomInt(0, 16)],
                                          this.initalNames[this.randomInt(0, 16)]);
      transactions.push(transaction);
    }
    return transactions;

  }

  randomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
