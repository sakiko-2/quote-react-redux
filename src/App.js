import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/index';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faRedo, faSpinner);


class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleClickReload() {
    this.props.fetchData();
  }

  renderQuote() {
    if (this.props.loading) {
      return (
        <div className='m-3'>
          <FontAwesomeIcon icon='spinner' pulse size='2x' color='lightgrey' />
        </div>
      );
    }

    return (
      <div className='blockquote m-3'>
        <div>{this.props.data.quote}</div>
        <div className='blockquote-footer'>{this.props.data.thoughtAuthor.name}</div>
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
              onClick={this.handleClickReload.bind(this)}
            >
              <FontAwesomeIcon icon='redo' />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
