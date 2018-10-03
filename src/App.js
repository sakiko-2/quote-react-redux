import React, { Component } from 'react';
import './App.css';

const REQUEST_URL = 'https://www.forbes.com/forbesapi/thought/uri.json?enrich=true&query=1&relatedlimit=1';
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
    const quote = this.state.dataSource.quote;

    return (
      <div className='App'>
        <header className='App-header'>
          <p>{quote}</p>
        </header>
      </div>
    );
  }
}

export default App;
