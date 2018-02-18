import React, { Component } from 'react';
import '../css/App.css';
import News from './News';
import Header from './Header';
import Search from './Search';
import { getSearchResult } from '../functions';

class SearchResults extends Component {
  constructor(context, props) {
    super();


    this.state = {
      news: {},
      searchId: 'default'
    }
  }

  componentWillMount() {
    this.ref = {
      context: this,
      state: 'news'
    };
    getSearchResult(this.props.params.searchId)
      .then(response => {
      let data = response.json();
      //console.log(data);
      return data;
    }).then(data => {
      this.setState({
        news: data['articles'],
        searchId: this.props.params.searchId
      })
    })
    //const search = `/${window.location.pathname.split('/')[1]}`;
    //console.log(search)

  }
  componentWillReceiveProps(nextProps) {
        if(nextProps.searchId !== this.state.searchId){
            this.setState({searchId: nextProps.searchId});
            console.log(`this state is ${this.state.searchId}`)
            console.log(`next state is ${nextProps.searchId}`)
        }
    }
  //const searchString = this.props.params.searchid;
  componentDidUpdate(prevProps, prevState) {
    const {searchId} = this.state;
    if(searchId !== prevState.searchId) {
      getSearchResult(this.props.params.searchId)
        .then(response => {
        let data = response.json();
        //console.log(data);
        return data;
      }).then(data => {
        this.setState({
          news: data['articles'],
          searchId: this.props.params.searchId
        })
      })
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Search/>
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

export default SearchResults;
