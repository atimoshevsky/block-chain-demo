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
  tokenInitalNonce: Array<number> = [78050, 22310, 39892, 5275, 88690];
  initalAmounts: Array<number> = [500, 250, 50, 40, 10,
                                   15, 10, 10, 10, 10,
                                   12, 11, 16, 30, 20,
                                   10, 5, 4, 7, 9,
                                   4, 3, 1, 3, 4
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
         block = new Block((i + 1), this.timeStamp, JSON.stringify(this.buildTransaction(i)), this.tokenInitalNonce[i], previuseHash);
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

  buildTransaction(blockNumber: number): Array<BlockTransaction> {
    const transactionCount = 5;
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
