import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import News from './News';
import Search from './Search';
import { getTopHeadlines } from '../functions';
import PropTypes from 'prop-types';

class App extends Component {

  state = {
    news: {},
    searchId: 'default'
  };

  componentWillMount() {
    this.ref = {
      context: this,
      state: 'news'
    };
    getTopHeadlines()
        .then(response => {
        let data = response.json();
        //console.log(data);
        return data;
      }).then(data => {
        this.setState({
          news: data['articles'],
          searchId: 'default'
        })
      })
  }

  render() {
    return (
      <div>
        <Header/>
        <Search params={this.props.params}/>
        <div className="news-list">
          <div className="#">
            <ul className="list-of-news">
              {
                Object
                .keys(this.state.news)
                .map(key => <News key={key} articles={this.state.news[key]}/>)
              }
            </ul>
          </div>
        </div>
        <div>
          <footer className="App-footer">
            <h6><a href="https://newsapi.org">Powered by News API</a></h6>
          </footer>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  news: PropTypes.array
}

export default App;
