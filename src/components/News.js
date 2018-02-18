import React, { Component } from 'react';

class News extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div>
        <li className="articles">
          <h3 className="headline">
            {articles.title}
          </h3>
          <p>
            <i>{articles.author}</i>
          <br></br>
            <i>{articles.publishedAt}</i>
          </p>
          <img src={articles.urlToImage} alt={articles.title}/>
          <p>
            {articles.description}
          </p>
          <h6><a href={articles.url} target="_blank">Read more</a></h6>
        </li>
      </div>
    );
  }
}

export default News;
