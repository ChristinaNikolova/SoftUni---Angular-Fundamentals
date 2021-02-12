import {
  Article
} from "../models/article.model";
import {
  data
} from "./seed";

export class ArticleData {
  public getData(): Array < Article > {
    var articles: Array < Article > = [];

    for (const currentData of data) {
      var article: Article = new Article(
        currentData.title,
        currentData.description,
        currentData.author,
        currentData.imageUrl
      );

      articles.push(article);
    }

    return articles;
  }
}
