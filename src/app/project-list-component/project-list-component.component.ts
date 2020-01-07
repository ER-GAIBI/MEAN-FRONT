import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list-component',
  templateUrl: './project-list-component.component.html',
  styleUrls: ['./project-list-component.component.scss']
})
export class ProjectListComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('4dd');
  }

}
