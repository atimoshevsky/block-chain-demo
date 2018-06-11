import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  userData = '';
  hash = '';
  nonce = 252196;
  constructor() { }

  ngOnInit() {
    this.hash = this.getSHA256(252196);
  }

  getSHA256(nonce: number): string {
    return CryptoJS.SHA256('11/06/2018' + JSON.stringify(this.userData) + nonce).toString();
  }

  onMine(): void {
    this.mineBlock(4);
  }

  userDataChange() {
   this.hash = this.getSHA256(0);
   this.nonce = 0;
  }

  mineBlock(difficulty: number) {
    let nonce = 0;
    let hash = this.getSHA256(nonce);

    while (hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      nonce++;
      hash = this.getSHA256(nonce);
    }
    this.hash = hash;
    this.nonce = nonce;
  }
}
