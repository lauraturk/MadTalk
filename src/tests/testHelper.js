import wordStub from './wordStub';
import textStub from './textStub';

import fetchMock from 'fetch-mock';

export const resolveAfter2Seconds = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export const mockFetchCalls = () => {
  fetchMock.get('https://byob-madlib.herokuapp.com/api/v1/text_samples/17/words', {
    status: 200,
    body: wordStub
  });

  fetchMock.get('https://byob-madlib.herokuapp.com/api/v1/text_samples/17', {
    status: 200,
    body: textStub
  });
};
