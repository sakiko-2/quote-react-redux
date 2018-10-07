import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loaded: false
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const num = Math.floor((Math.random() * 1000) + 1);
    const REQUEST_URL = `https://www.forbes.com/forbesapi/thought/uri.json?enrich=true&query=${num}&relatedlimit=1`;

    fetch(PROXY_URL + REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: responseData.thought,
          loaded: true
        });
      })
      .catch((error) => console.log('Error:', error));
  }

  renderQuote() {
    if (!this.state.loaded) {
      return <FontAwesomeIcon icon='spinner' pulse size='2x' color='lightgrey' />;
    }

    return(
      <div className='blockquote mt-3'>
        <div>{this.state.dataSource.quote}</div>
        <div className='blockquote-footer'>{this.state.dataSource.thoughtAuthor.name}</div>
      </div>
    );
  }

  render() {
    const quote = this.state.loaded ?
      this.state.dataSource.quote :
      <FontAwesomeIcon icon='spinner' pulse size='2x' color='lightgrey' />;

    return (
      <div className='App'>
        <div className='container'>
          <header className='App-header'>
            <h1>Quote Of The Day</h1>
          </header>
          <div className='bg-white round-corner'>
            <div className='card-body'>
              {this.renderQuote()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
