import { Component, OnInit } from '@angular/core';
import { BlockTransaction } from '../../core/block-transaction';
import { Mode } from '../../core/mode';


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  mode: Mode =  Mode.Tokens;
  tokenInitalNonce: Array<number> = [48623, 209816, 91548, 12577, 3068];
  tokenInitalAmounts: Array<number> = [555.55, 250.15, 50.45, 40.32, 10.19,
    15.01, 10.20, 14.34, 10.23, 10.11,
    12.54, 11.12, 16.43, 30.12, 20.43,
    10.12, 5.43, 4.54, 7.23, 9.54,
    4.12, 3.65, 1.45, 3.23, 4.34
  ];
  tokenInitalNames: Array<Array<string>> = [
    ['Credit Suisse', 'Alex'],
    ['Alex', 'Vika'],
    ['Alex', 'Michal'],
    ['Alex', 'Varvara'],
    ['Alex', 'Oleksii'],
    ['Vika', 'Lida'],
    ['Vika', 'Valera'],
    ['Vika', 'Tania'],
    ['Vika', 'Michal'],
    ['Vika', 'Nadia'],
    ['Alex', 'Wojciech'],
    ['Wojciech', 'Lukasz'],
    ['Lukasz', 'Tomasz'],
    ['Tomasz', 'Alex'],
    ['Gerry', 'Toby'],
    ['Toby', 'Simon'],
    ['Simon', 'Tim'],
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
