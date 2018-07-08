import { Component, OnInit } from '@angular/core';
import { Mode } from '../../core/mode';


@Component({
  selector: 'app-coinbase',
  templateUrl: './coinbase.component.html',
  styleUrls: ['./coinbase.component.css']
})
export class CoinbaseComponent implements OnInit {
  mode: Mode =  Mode.CoinBase;
  tokenInitalNonce: Array<number> = [47316, 32491, 112451, 28611, 13739];
  tokenInitalAmounts: Array<number> = [50, 15, 15, 5, 5,
    15, 10, 14, 10, 1,
    1, 1, 1, 3, 2,
    10, 0.5, 0.4, 0.1, 0.95
  ];
  tokenInitalNames: Array<Array<string>> = [
    ['Alex', 'Vika'],
    ['Alex', 'Misha'],
    ['Alex', 'Varvara'],
    ['Alex', 'Oleksii'],
    ['Alex', 'Oleksii'],
    ['Vika', 'Lida'],
    ['Vika', 'Valera'],
    ['Vika', 'Tania'],
    ['Vika', 'Michal'],
    ['Misha', 'Oleksii'],
    ['Alex', 'Wojciech'],
    ['Alex', 'Lukasz'],
    ['Alex', 'Tomasz'],
    ['Alex', 'Alex'],
    ['Alex', 'Toby'],
    ['Toby', 'Simon'],
    ['Wojciech', 'Tim'],
    ['Tim', 'Colin'],
    ['Colin', 'Robert'],
    ['Robert', 'Gerry'],
    ['Alex', 'Vika'],
    ['Alex', 'Vika'],
    ['Alex', 'Vika'],
    ['Alex', 'Vika'],
    ['Alex', 'Vika'],
  ];
  constructor() { }

  ngOnInit() {
  }

}
