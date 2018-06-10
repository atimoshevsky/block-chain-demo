import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  userData = '';
  constructor() { }

  ngOnInit() {
  }

  getSHA256(): string {
    return CryptoJS.SHA256(this.userData).toString();
  }
}
