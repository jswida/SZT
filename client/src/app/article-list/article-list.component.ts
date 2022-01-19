import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articleList = [{title: "Title", content:"Lorem Ipsum"},{title: "Title2", content:"Lorem Ipsum"},{title: "Title3", content:"Lorem Ipsum"}];
  size = "16px";
  color = "black";
  background = "white";

  constructor() { }

  ngOnInit(): void {
  }

}
