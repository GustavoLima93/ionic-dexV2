import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-generations',
  templateUrl: './list-generations.page.html',
  styleUrls: ['./list-generations.page.scss'],
})
export class ListGenerationsPage implements OnInit {

  public generations: any[] = [
    {number: 1, year: '(1996-1999)'},
    {number: 2, year: '(1999-2002)'},
    {number: 3, year: '(2002-2006)'},
    {number: 4, year: '(2006-2010)'},
    {number: 5, year: '(2010-2013)'},
    {number: 6, year: '(2013-2016)'},
    {number: 7, year: '(2016-2017)'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
