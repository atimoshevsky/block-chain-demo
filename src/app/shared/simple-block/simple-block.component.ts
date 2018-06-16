import { Component, Input,  OnInit } from '@angular/core';
import { Block } from '../../../core/block';

@Component({
  selector: 'app-simple-block',
  templateUrl: './simple-block.component.html',
  styleUrls: ['./simple-block.component.css']
})

export class SimpleBlockComponent implements OnInit {
  @Input() block: Block;
  sentiment = 'sentiment_very_satisfied';
  mined = true;

  constructor() { }

  ngOnInit() {
  }

  onMine(): void {
    this.mineBlock();
    this.mined = true;
  }

  mineBlock() {
    this.block.ProofOfWork();
    this.sentiment = 'sentiment_very_satisfied';
  }

  onDataChanged() {
    this.block.CalculateHash();

    if (this.block.IsMeetDifficulty()) {
      this.sentiment = 'sentiment_very_satisfied';
      this.mined = true;
    } else {
      this.sentiment = 'sentiment_very_dissatisfied';
      this.mined = false;
    }
  }
}
