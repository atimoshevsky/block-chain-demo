import { Component, Input, EventEmitter, OnInit, OnChanges, Output } from '@angular/core';
import { Block } from '../../../core/block';
import { Mode } from '../../../core/mode';

@Component({
  selector: 'app-simple-block',
  templateUrl: './simple-block.component.html',
  styleUrls: ['./simple-block.component.css']
})

export class SimpleBlockComponent implements OnChanges, OnInit {
  @Input() block: Block;
  @Input() mode: Mode;
  @Output() blockChanged = new EventEmitter<Block>();

  isPreviouseHash: boolean;
  sentiment: string;
  mined = true;
  mining = false;

  constructor() {
  }

  ngOnInit() {
    this.isPreviouseHash = (this.mode === Mode.BlockChain || this.mode === Mode.Tokens || this.mode === Mode.CoinBase);
    this.refresh();
  }

  ngOnChanges() {
    this.block.CalculateHash();
    this.refresh();
  }

  onNonceKey(event: any) {
      this.blockChanged.emit(this.block);
  }

  onDataKey(event: any) {
      this.blockChanged.emit(this.block);
  }

  onMineClicked(): void {
    this.mining = true;
    setTimeout(() => {
      if (!this.block.IsMeetDifficulty()) {
        this.block.ProofOfWork();
        this.refresh();
        if (this.mode === Mode.BlockChain || this.mode === Mode.Tokens || this.mode === Mode.CoinBase) {
            this.blockChanged.emit(this.block);
        }
      }
      this.mining = false;
    }, 500);
  }

  onTransactionChanged(transaction: string) {
    this.block.Data = transaction;
    this.blockChanged.emit(this.block);
  }

  refresh() {
    this.sentiment = this.block.IsMeetDifficulty() ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
    this.mined = this.block.IsMeetDifficulty();
  }
}
