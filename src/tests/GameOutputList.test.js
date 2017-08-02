/* global expect true */
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { GameOutputList } from '../components/GameOutputList';
import { shallow, mount } from 'enzyme';
/* eslint-enable */

let gameInputStub = [
  {userInputword: 'dog', wordIndex: 68, wordType: 'NN'},
  {userInputword: 'cats', wordIndex: 49, wordType: 'NNS'},
  {userInputword: 'boats', wordIndex: 24, wordType: 'NNS'},
  {userInputword: 'dude', wordIndex: 17, wordType: 'NN'},
  {userInputword: 'run', wordIndex: 41, wordType: 'VB'}
];

let textStub = {
  textSample: [
    {
      body: `Can/NNP you/PRP fall/VBP in/IN love/NN with/IN someone/NN you/PRP '/'' ve/VBP never/RB even/RB met/VBN ?/.. Matt/NNP Eriksson/NNP is/VBZ no/DT stranger/NN to/TO heartbreak/VB ./.. He/PRP '/POS s/NNS still/RB not/RB players/NNS at/IN the/DT opera/NN and/CC exploding/VBG ovaries/NNS ./.`, id: 15, title: 'Stay', created_at: '7-27-17', updated_at: '7/27/17'
    }
  ],
  words: [
    {id: 5, word: 'pics', type: 'NNS', index: 17},
    {id: 551, word: 'run', type: 'VB', index: 41},
    {id: 667, word: 'hockey', type: 'NN', index: 51},
    {id: 112, word: 'dude', type: 'NN', index: 17},
    {id: 9, word: 'tricks', type: 'VB', index: 18}
  ]};

describe('GameOutputList tests', () => {
  it('1. should render GameOutput-container', () => {
    const wrapper = shallow(<GameOutputList textSample={ textStub }
      gameInputWords={ gameInputStub }
      speechEnabled={ false }/>);
    expect(wrapper.find('.GameOutput-container').length).toBe(1);
  });

  it('2. should render a video', () => {
    const wrapper = shallow(<GameOutputList textSample={ textStub }
      gameInputWords={ gameInputStub }
      speechEnabled={ false }/>);
    expect(wrapper.find('.video').length).toBe(1);
  });

  it('3. should render a text container', () => {
    const wrapper = shallow(<GameOutputList textSample={ textStub }
      gameInputWords={ gameInputStub }
      speechEnabled={ false }/>);
    expect(wrapper.find('.GameOutput-textContainer').length).toBe(1);
  });
});
