import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular', 'http://angular.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 2),
      new Article('Fulham FC', 'http://fulhamfc.com', 2)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`addding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
      return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
