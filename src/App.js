import React, { Component } from 'react';
import './App.css';

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

  render() {
    const quote = this.state.loaded ? this.state.dataSource.quote : 'Loading ...';

    return (
      <div className='App'>
        <div className='container'>
          <header className='App-header'>
            <h1>Quote Of The Day</h1>
          </header>
          <div className='bg-white round-corner'>
            <div className='card-body'>
              {quote}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
