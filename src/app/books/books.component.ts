import { Component, OnInit } from '@angular/core';

interface Book {
  id: number
  title: string
  author: string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
