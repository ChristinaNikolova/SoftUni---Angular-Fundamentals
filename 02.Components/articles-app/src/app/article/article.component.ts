import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  Article
} from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() articleDesc: string;

  private symbols: number = 250;
  public showReadMoreBtn: boolean;
  public showHideBtn: boolean;
  public imageButtonTitle: string;
  public articleDescLen: number;
  public descToShow: string;
  public imageIsShown: boolean;

  constructor() {
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
    this.imageButtonTitle = "Show Image";
    this.articleDescLen = 0;
    this.descToShow = "";
    this.imageIsShown = false;
  }

  ngOnInit(): void {}

  readMore(): void {
    this.articleDescLen += this.symbols;

    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow += this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  hideDesc(): void {
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
    this.articleDescLen = 0;
    this.descToShow = ""
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle === "Show Image" ? "Hide Image" : "Show Image";
  }
}
