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
  constructor() { }

  ngOnInit() {
  }

}
