/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */

export class InputSnippet extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      genre: '',
      body: ''
    };
  }

  handleSubmitSnippet (e) {
    e.preventDefault();
    console.log('title: ', this.state.title, 'genre: ', this.state.genre, 'body: ', this.state.body);
  }

  render () {
    return (
      <section className='InputSnippet-container'>
        <form>
          <label htmlFor='InputSnippet-title'><h3>Title:</h3></label>
          <input className='InputSnippet-title'
            id='InputSnippet-title'
            placeholder='Title'
            value={ this.state.title }
            onChange={ (e) => this.setState({ title: e.target.value })} />
          <label htmlFor='InputSnippet-genre'><h3>Genre:</h3></label>
          <input className='InputSnippet-genre'
            id='InputSnippet-genre'
            placeholder='Genre'
            value={ this.state.genre }
            onChange={ (e) => this.setState({ genre: e.target.value })} />
          <label htmlFor='InputSnippet-body'><h3>Text:</h3></label>
          <textarea className='InputSnippet-body'
            placeholder='Text'
            value={ this.state.body }
            onChange={ (e) => this.setState({ body: e.target.value })} />
          <input type='submit' onClick={(e) => this.handleSubmitSnippet(e) }/>
        </form>
      </section>
    );
  };
};
