import { Component, OnInit } from '@angular/core';
import { Iprojects } from './Iprojects';
import { projects } from './projects';
import { trigger, state, style, animate, transition } from '@angular/animations'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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

export class ProjectsComponent implements OnInit {
  projects:Iprojects[]= projects;
  constructor() { }

  ngOnInit(): void {
  }

}
