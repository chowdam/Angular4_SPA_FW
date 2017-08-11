
import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { TitleBarComponent } from '../title-bar/title-bar.component';
import { StatusBarComponent } from '../status-bar/status-bar.component';

@Component({
  selector: 'fw-framework-body',
  templateUrl: './framework-body.component.html',
  styleUrls: ['./framework-body.component.css']
})
export class FrameworkBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
