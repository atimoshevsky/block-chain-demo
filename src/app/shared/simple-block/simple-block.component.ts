import { Component, Input,  OnInit, OnChanges } from '@angular/core';
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

  isPreviouseHash: boolean;
  sentiment: string;
  mined = true;

  constructor() {
   }

  ngOnInit() {
    this.isPreviouseHash = (this.mode === Mode.BlockChain);
    this.updateMined();
  }

  ngOnChanges() {
    console.log('I do not know how to use it yet!!!!');
  }

  onMine(): void {
    this.mineBlock();
    this.updateMined();
  }

  mineBlock() {
    this.block.ProofOfWork();
    this.updateMined();
  }

  onDataChanged() {
    this.block.CalculateHash();
    this.updateMined();
  }

  updateMined() {
    this.sentiment = this.block.IsMeetDifficulty() ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
    this.mined =  this.block.IsMeetDifficulty();
  }
}
