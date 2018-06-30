import { Component, OnInit } from '@angular/core';
import { Mode } from '../../core/mode';

@Component({
  selector: 'app-distributed-blockchain',
  templateUrl: './distributed-blockchain.component.html',
  styleUrls: ['./distributed-blockchain.component.css']
})
export class DistributedBlockchainComponent implements OnInit {
  peerTitleA = 'Peer A';
  peerTitleB = 'Peer B';
  peerTitleC = 'Peer C';
  mode: Mode =  Mode.Distributed;
  constructor() { }

  ngOnInit() {
  }

}
