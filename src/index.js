import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import App from './components/App';
import NotFound from './components/NotFound';
import SearchResults from './components/SearchResults';
import { browserHistory, BrowserRouter, Match, Miss } from 'react-router';
//import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/result/:searchId" component={SearchResults} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#root'));
