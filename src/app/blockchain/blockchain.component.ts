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
  initalNonce: Array<number> = [85817, 56043, 118847, 3979, 38337];
  tokenInitalNonce: Array<number> = [48623, 209816, 91548, 12577, 3068];
  initalAmounts: Array<number> = [555.55, 250.15, 50.45, 40.32, 10.19,
                                   15.01, 10.20, 14.34, 10.23, 10.11,
                                   12.54, 11.12, 16.43, 30.12, 20.43,
                                   10.12, 5.43, 4.54, 7.23, 9.54,
                                   4.12, 3.65, 1.45, 3.23, 4.34
                                  ];
  initalNames: Array<Array<string>> = [
                                       ['Credit Suisse', 'Alex'],
                                       ['Alex', 'Vika'],
                                       ['Alex', 'Michal'],
                                       ['Alex', 'Varvara'],
                                       ['Alex', 'Oleksii'],
                                       ['Vika', 'Lida'],
                                       ['Vika', 'Valera'],
                                       ['Vika', 'Tania'],
                                       ['Vika', 'Michal'],
                                       ['Vika', 'Nadia'],
                                       ['Alex', 'Wojciech'],
                                       ['Wojciech', 'Lukasz'],
                                       ['Lukasz', 'Tomasz'],
                                       ['Tomasz', 'Alex'],
                                       ['Gerry', 'Toby'],
                                       ['Toby', 'Simon'],
                                       ['Simon', 'Tim'],
                                       ['Tim', 'Colin'],
                                       ['Colin', 'Robert'],
                                       ['Robert', 'Gerry'],
                                       ['Alex', 'Vika'],
                                       ['Alex', 'Vika'],
                                       ['Alex', 'Vika'],
                                       ['Alex', 'Vika'],
                                       ['Alex', 'Vika'],
    ]
  ;
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
      transaction = new BlockTransaction(i, this.initalAmounts[blockNumber * transactionCount + i],
                                          this.initalNames[blockNumber * transactionCount + i][0],
                                          this.initalNames[blockNumber * transactionCount + i][1]);
      transactions.push(transaction);
    }
    return transactions;

  }
}
