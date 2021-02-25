import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {

  users = ['Максим','Саша','Катя','Лена'];
  myControl: '';
  searchStr: '';


  constructor() { }

  ngOnInit(): void {

  }

}
