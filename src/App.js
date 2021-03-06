/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faSpinner, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchData } from './actions';
import './App.css';
import Footer from './components/Footer';
import Title from './components/Title';

library.add(faRedo, faSpinner, faQuoteLeft);


class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchData();
  }

  handleClickReload() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchData();
  }

  renderQuote() {
    const { data, loading } = this.props;

    if (loading || !data) {
      return (
        <div className="m-3">
          <FontAwesomeIcon
            icon="spinner"
            pulse
            size="2x"
            color="lightgrey"
          />
        </div>
      );
    }

    return (
      <div className="blockquote mx-4 my-3">
        <div className="text-left">
          <div>
            <FontAwesomeIcon icon="quote-left" />
          </div>
          {data.quote}
        </div>
        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-dark m-1 rounded-circle text-left"
            onClick={this.handleClickReload.bind(this)}
            aria-label="Reload Button"
            type="button"
          >
            <FontAwesomeIcon icon="redo" />
          </button>
          <div className="blockquote-footer mt-2 text-right">
            {data.thoughtAuthor.name}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <main className="content">
            <Title title="Quote Of The Day"/>
            <div className="d-flex flex-row justify-content-center">
              <div className="bg-white card">
                <div className="card-body">
                  {this.renderQuote()}
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(fetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
