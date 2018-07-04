import { Component, Input, EventEmitter, OnInit, OnChanges, Output } from '@angular/core';
import { Block } from '../../../core/block';
import { Mode } from '../../../core/mode';
import { BlockTransaction } from '../../../core/block-transaction';

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
    this.isPreviouseHash = (this.mode === Mode.BlockChain || this.mode === Mode.Tokens);
    this.refresh();
  }

  ngOnChanges() {
    this.block.CalculateHash();
    this.refresh();
  }

  onNonceKey(event: any) {
    if (this.blockChanged) {
      this.blockChanged.emit(this.block);
    }
  }

  onDataKey(event: any) {
    if (this.blockChanged) {
      this.blockChanged.emit(this.block);
    }
  }

  onMineClicked(): void {
    this.mining = true;
    setTimeout(() => {
      if (!this.block.IsMeetDifficulty()) {
        this.block.ProofOfWork();
        this.refresh();
        if (this.mode === Mode.BlockChain) {
          if (this.blockChanged) {
            this.blockChanged.emit(this.block);
          }
        }
      }
      this.mining = false;
    }, 500);
  }

  refresh() {
    this.sentiment = this.block.IsMeetDifficulty() ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
    this.mined = this.block.IsMeetDifficulty();
  }
}
