import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributed-blockchain',
  templateUrl: './distributed-blockchain.component.html',
  styleUrls: ['./distributed-blockchain.component.css']
})
export class DistributedBlockchainComponent implements OnInit {
  peerTitleA = 'Peer A';
  peerTitleB = 'Peer B';
  peerTitleC = 'Peer C';
  constructor() { }

  ngOnInit() {
  }

}
