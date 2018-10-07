import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faRedo, faSpinner);

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loaded: false
    }
    this.handleClickReload = this.handleClickReload.bind(this);
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

  handleClickReload() {
    this.setState({ loaded: false });
    this.fetchData();
  }

  renderQuote() {
    if (!this.state.loaded) {
      return (
        <div className='m-3'>
          <FontAwesomeIcon icon='spinner' pulse size='2x' color='lightgrey' />
        </div>
      );
    }

    return (
      <div className='blockquote m-3'>
        <div>{this.state.dataSource.quote}</div>
        <div className='blockquote-footer'>{this.state.dataSource.thoughtAuthor.name}</div>
      </div>
    );
  }

  render() {
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
          <div>
            <button
              className='btn btn-dark m-1 round-corner'
              onClick={this.handleClickReload}
            >
              <FontAwesomeIcon icon='redo' />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
