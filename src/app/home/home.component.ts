import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
declare var $: any;
import 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
