import { Component, OnInit } from '@angular/core';
import { Mode } from '../../core/mode';


@Component({
  selector: 'app-coinbase',
  templateUrl: './coinbase.component.html',
  styleUrls: ['./coinbase.component.css']
})
export class CoinbaseComponent implements OnInit {
  mode: Mode =  Mode.CoinBase;
  tokenInitalNonce: Array<number> = [29667, 54458, 13356, 15752, 153048];
  tokenInitalAmounts: Array<number> = [50, 50, 50, 50, 45,
    40, 35, 30, 10, 10,
    10, 10, 10, 30, 20,
    10, 0.5, 0.4, 0.1, 0.095
  ];
  tokenInitalNames: Array<Array<string>> = [
    ['Alex', 'Vika'],
    ['Alex', 'Misha'],
    ['Alex', 'Varvara'],
    ['Alex', 'Oleksii'],
    ['Alex', 'Oleksii'],
    ['Alex', 'Wojciech'],
    ['Alex', 'Misha'],
    ['Alex', 'Varvara'],
    ['Vika', 'Lida'],
    ['Vika', 'Valera'],
    ['Vika', 'Tania'],
    ['Vika', 'Michal'],
    ['Misha', 'Oleksii'],
    ['Alex', 'Lukasz'],
    ['Alex', 'Tomasz'],
    ['Alex', 'Toby'],
    ['Toby', 'Simon'],
    ['Wojciech', 'Tim'],
    ['Tim', 'Colin'],
    ['Colin', 'Robert'],
    ['Robert', 'Gerry']
  ];
  constructor() { }

  ngOnInit() {
  }

}
