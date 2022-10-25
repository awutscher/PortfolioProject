import { Component, OnInit } from '@angular/core';
import { Iheroimages } from './Iheroimg';
import { heroimages } from './heroimg';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  heroimages:Iheroimages[] = heroimages;

  constructor() { }

  ngOnInit(): void {
  }

}
