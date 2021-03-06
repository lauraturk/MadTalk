export default class Helper {
  async getTextSample () {
    let randomIndex = Math.floor(Math.random() * (22 - 15)) + 15; // The maximum is exclusive and the minimum is inclusive
    let wordsData = await fetch(`https://byob-madlib.herokuapp.com/api/v1/text_samples/${randomIndex}/words`);
    let textSampleData = await fetch(`https://byob-madlib.herokuapp.com/api/v1/text_samples/${randomIndex}`);

    let words = await wordsData.json();
    let textSample = await textSampleData.json();
    return {words, textSample};
  }

  distributeSelections (text) {
    let wordTallies = text.reduce((acc, wordObj) => {
      !acc.all[wordObj.type]
        ? acc.all[wordObj.type] = 1
        : acc.all[wordObj.type]++;

      let coreType = wordObj.type.substring(0, 2);
      !acc.core[coreType]
        ? acc.core[coreType] = 1
        : acc.core[coreType]++;

      return acc;
    }, {all: {}, core: {}});
    const pctSelections = 20; // Adjust to increase qty of selections
    const qtyWords = text.length;
    const qtyCoreWords = Object.keys(wordTallies.core).reduce((acc, wordType) => {
      if (wordType === 'NN' || wordType === 'VB' || wordType === 'JJ') {
        acc += wordTallies.core[wordType];
      }
      return acc;
    }, 0);
    const qtySelectedWords = Math.round(pctSelections / 100 * qtyWords);
    const wordTalliesByCore = {
      qtyNounSelected: Math.round(wordTallies.core['NN'] / qtyCoreWords * qtySelectedWords),
      qtyVerbSelected: Math.round(wordTallies.core['VB'] / qtyCoreWords * qtySelectedWords),
      qtyAdjSelected: Math.round(wordTallies.core['JJ'] / qtyCoreWords * qtySelectedWords)
    };
    return wordTalliesByCore;
  }

  getPartsOfSpeech (wordsArray) {
    const totals = this.distributeSelections(wordsArray);

    let adjArray = [];
    let nounArray = [];
    let verbArray = [];

    wordsArray.forEach((word) => {
      if (word.type.includes('NN')) {
        nounArray.push(word);
      } else if (word.type.includes('VB')) {
        verbArray.push(word);
      } else if (word.type.includes('JJ')) {
        adjArray.push(word);
      }
    });

    let selectedAdjs = this.randomizeSelections(totals.qtyAdjSelected, adjArray);
    let selectedNouns = this.randomizeSelections(totals.qtyNounSelected, nounArray);
    let selectedVerbs = this.randomizeSelections(totals.qtyVerbSelected, verbArray);
    return {selectedAdjs, selectedNouns, selectedVerbs};
  }

  randomizeSelections (total, pos) {
    let randoms = pos.reduce((acc, el) => {
      acc[el.word] = Math.round(1000 * Math.random()) / 1000;
      return acc;
    }, {});

    let randomWords = Object.keys(randoms);
    let randomVals = Object.values(randoms).sort((a, b) => {
      return a - b;
    });

    let selectedWords = [];

    randomVals.forEach((val, i) => {
      if (i < total) {
        randomWords.forEach((word) => {
          if (randoms[word] === val) {
            selectedWords.push(pos.find(posWord => posWord.word === word));
          }
        });
      }
    });
    return selectedWords;
  }
}
