import React from 'react';
import PropTypes from 'prop-types'
import SearchResults from './SearchResults';

class Search extends React.Component {
  constructor(props, context) {
    super(props);

    this.submitSearch = this.submitSearch.bind(this);
  }



  submitSearch(event) {
    event.preventDefault();
    const searchId = this.searchinput.value;
    const sortByVal = this.sortByVal.value;
    const langVal = this.langVal.value;
    console.log(`SearchId is: ${searchId}`)
    console.log(`sortByVal is: ${sortByVal}`)
    console.log(`langVal is: ${langVal}`)
    //this.setState({searchId: searchId})
    //this.searchForm.reset();
    //this.context.history.pushState(null, `/result/${searchId}`);
    this.context.router.transitionTo(`/result/${searchId}`);
    this.searchForm.reset();
    //="/${searchId}`" component={SearchResults} />
    //this.context.router.transitionTo(`/${searchId}`);
    //this.props.history.push(`route/${searchId}`)

  }

  render(){
    return (
    <form ref={(input) => this.searchForm = input} className="search-form" onSubmit={(e) => this.submitSearch(e)}>
      <h2>Search News</h2>
      <input type="text" required placeholder="Search String" ref={(input) => {this.searchinput = input}}/>
      <select type="text" name="sortBy" ref={(select) => {this.sortByVal = select}}>
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Published</option>
      </select>
      <select type="text" name="language" ref={(select) => {this.langVal = select}}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
      </select>
      <button type="submit">Search</button>
    </form>
    )
  }
}

Search.contextTypes = {
  router: PropTypes.object.isRequired
};
export default Search;
