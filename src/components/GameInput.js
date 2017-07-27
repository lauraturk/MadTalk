/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */
import POShelper from '../helpers/pos-helper';

export class GameInput extends Component {
  constructor () {
    /*eslint-disable */
    super ();
    /*eslint-enable */
    this.state = {
      wordInput: '',
      wordIndex: '',
      wordType: ''
    };
  }

  componentDidMount () {
    const { wordInfo } = this.props;
    this.setState({
      wordIndex: wordInfo.index,
      wordType: wordInfo.type
    });
  }

  sendUpGameInputs () {
    const { handleGameInputs } = this.props;
    handleGameInputs(this.state);
  }

  render () {
    const { wordInfo, inputNumber } = this.props;
    let wordPrompt = POShelper[wordInfo.type];

    return (
      <div className={`game-input-card card-${inputNumber}`}
        data-index={ wordInfo.index }
        data-type={ wordInfo.type }>
        <label>
          <input className='selected-word-input'
            placeholder={ wordPrompt }
            value={ this.state.wordInput }
            onChange={(e) => this.setState({ wordInput: e.target.value })}
            onBlur={() => this.sendUpGameInputs()}/>
          <h4>{ wordPrompt } ({ wordInfo.word })</h4>
        </label>
      </div>
    );
  }
};
