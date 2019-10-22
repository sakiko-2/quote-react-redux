import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions/index';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faSpinner, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';

library.add(faRedo, faSpinner, faQuoteLeft);


class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleClickReload() {
    this.props.fetchData();
  }

  renderQuote() {
    if (this.props.loading || !this.props.data) {
      return (
        <div className='m-3'>
          <FontAwesomeIcon icon='spinner' pulse size='2x' color='lightgrey' />
        </div>
      );
    }

    return (
      <div className='blockquote mx-4 my-3'>
        <div className='text-left'>
          <div><FontAwesomeIcon icon='quote-left' /></div>
          {this.props.data.quote}
        </div>
        <div className='d-flex justify-content-between mt-4'>
          <button
            className='btn btn-dark m-1 rounded-circle text-left'
            onClick={this.handleClickReload.bind(this)}
            aria-label='Reload Button'
          >
            <FontAwesomeIcon icon='redo' />
          </button>
          <div className='blockquote-footer mt-2 text-right'>{this.props.data.thoughtAuthor.name}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='content'>
            <header className='App-header'>
              <h1>Quote Of The Day</h1>
            </header>
            <div className='d-flex flex-row justify-content-center'>
              <div className='bg-white card'>
                <div className='card-body'>
                  {this.renderQuote()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
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
