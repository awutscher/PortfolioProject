import { Component, OnInit } from '@angular/core';
import { Iheroimages } from './Iheroimg';
import { heroimages } from './heroimg';
import { Ilanguages } from './Ilanguages';
import { languages } from './languages';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [

    //slide in from left side
    trigger('slideFromLeft',[
    transition(':enter',[
      style({ 
        transform: 'translateX(-200%)',
      }),
      animate('1s 0.5s ease-in-out')
    ])]),


    // slide in from right side 
    trigger('slideFromRight',[
      transition(':enter',[
        style({
          transform: 'translateX(200%)',
        }),
        animate('1s 0.5s ease-in-out')
      ]),
    ])
  ]})

export class IndexComponent implements OnInit {

  heroimages:Iheroimages[] = heroimages;
  languages:Ilanguages[]= languages;
  constructor() { }

  ngOnInit(): void {
  }

}
