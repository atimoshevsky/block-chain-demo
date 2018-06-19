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

  // Hack! somehow it gives possibility to catch ngOnChange when I change UI and when Container change Block item.
  // MAGIC!!!
  @Input() userData: string;
  @Input() hash: string;
  @Input() nonce: number;

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
    this.block.CalculateHash();
    this.updateMined();
  }

  onMine(): void {
    this.mineBlock();
    this.updateMined();
  }

  mineBlock() {
    this.block.ProofOfWork();
    this.updateMined();
  }

  onPreviouseHashChange(event: any) {
    console.log( 'previouse hhash change');
  }

  updateMined() {
    this.sentiment = this.block.IsMeetDifficulty() ? 'sentiment_very_satisfied' : 'sentiment_very_dissatisfied';
    this.mined =  this.block.IsMeetDifficulty();
  }
}
