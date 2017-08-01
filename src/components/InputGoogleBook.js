/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */

import Helper from '../helpers/helper';

let helper = new Helper();

export class InputGoogleBook extends Component {
  constructor () {
    super();
    this.state = {
      userInput: '',
      searchResults: []
    };
  }

  handleBookFetch () {
    helper.queryGoogleBooks(this.state.userInput)
      .then(bookObj => {
        console.log(bookObj.items);
        let searchResultsArr = bookObj.items.map(bookInfo => {
          return (
            <div>
              <h4>title: { bookInfo.volumeInfo.title }</h4>
              <h4>author: { bookInfo.volumeInfo.authors }</h4>
              <h4>genre: { bookInfo.volumeInfo.categories }</h4>
              <h4>publishedDate: { bookInfo.volumeInfo.publishedDate }</h4>
              <h4>description: { bookInfo.volumeInfo.description }</h4>
            </div>
          );
        });
        this.setState({searchResults: searchResultsArr});
      });
  };

  render () {
    // if (this.state.userInput) {
    //   this.handleBookFetch();
    // }
    return (
      <div>google books
        <input onChange={(e) => {
          this.setState({userInput: e.target.value});
        }}
        value={ this.state.userInput }/>
        <button onClick={() => this.handleBookFetch() }>CLICK</button>
        { this.state.searchResults }
      </div>
    );
  }
};
