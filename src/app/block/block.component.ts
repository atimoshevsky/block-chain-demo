import { Component, OnInit } from '@angular/core';
import { Block } from '../../core/block';



@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  userData = '';
  hash = '';
  nonce = 129039;
  timestamp = '11/06/2018';
  difficulty = 4;
  sentiment = 'sentiment_very_satisfied';
  mined = true;
  constructor() { }

  ngOnInit() {
    const block = new Block(0, this.timestamp, '');
    this.hash = block.calculateHash(this.nonce);
  }

  onMine(): void {
    this.mineBlock();
    this.mined = true;
  }

  mineBlock() {
    let nonce = 0;
    const block = new Block(0, this.timestamp, this.userData);
    let hash = block.calculateHash(nonce);

    while (!this.isMeetDifficulty(hash, this.difficulty)) {
      nonce++;
      hash = block.calculateHash(nonce);
    }
    this.hash = hash;
    this.nonce = nonce;
    this.sentiment = 'sentiment_very_satisfied';
  }

  onDataChanged() {
    console.log('test');
    const block = new Block(0, this.timestamp, this.userData);
    this.hash = block.calculateHash(this.nonce);
    if (this.isMeetDifficulty(this.hash, 0)) {
      this.sentiment = 'sentiment_very_satisfied';
      this.mined = true;
    } else {
      this.sentiment = 'sentiment_very_dissatisfied';
      this.mined = false;
    }
  }

  isMeetDifficulty(hash: string, difficulty: number): boolean {
    return hash.substring(0, this.difficulty) === Array(this.difficulty + 1).join('0');
  }
}
