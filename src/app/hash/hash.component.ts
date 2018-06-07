import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent implements OnInit {

  userData = '';
  constructor() { }

  ngOnInit() {
  }

  getSHA256(): string {
    return CryptoJS.SHA256(this.userData).toString();
  }
}
