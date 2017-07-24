
export default class Helper {

  async getPrintSample () {
    let jsonText = await fetch('https://byob-madlib.herokuapp.com/api/v1/text_samples/1');
    let textSample = await jsonText.json();
    let sampleArr = [4, 7, 15, 39, 40]

    let gameTemplate = textSample[0].body.split(' ');

    sampleArr.forEach( selectedIndex => {
      gameTemplate.splice(selectedIndex, 0, "<span>TEXT</span>" )
    })

    // gameTemplate = gameTemplate.join(' ')
    return gameTemplate;
  }

  async getTextSample () {
    let jsonText = await fetch('https://byob-madlib.herokuapp.com/api/v1/text_samples/1/words');
    let textSample = await jsonText.json();
    return textSample;
  }

  async distributeSelections () {
    const text = await this.getTextSample()
    let wordTallies = text.reduce((acc, wordObj) => {
      !acc.all[wordObj.type]
        ? acc.all[wordObj.type] = 1
        : acc.all[wordObj.type] ++;

      let coreType = wordObj.type.substring(0,2)
      !acc.core[coreType]
        ? acc.core[coreType] = 1
        : acc.core[coreType] ++;

      return acc;
    }, {all: {}, core: {}} )
    const pctSelections = 9; // Adjust to increase qty of selections
    const qtyWords = text.length;
    const qtyCoreWords = Object.keys(wordTallies.core).reduce((acc, wordType) => {
      if (wordType === 'NN' || wordType === 'VB' || wordType === 'JJ') {
        acc += wordTallies.core[wordType]
      }
      return acc
    }, 0);
    const qtySelectedWords = Math.round(pctSelections / 100 * qtyWords);
    const wordTalliesByCore = {
      qtyNounSelected: Math.round(wordTallies.core['NN'] / qtyCoreWords * qtySelectedWords),
      qtyVerbSelected: Math.round(wordTallies.core['VB'] / qtyCoreWords * qtySelectedWords),
      qtyAdjSelected: Math.round(wordTallies.core['JJ'] / qtyCoreWords * qtySelectedWords),
    }

    // console.log(text);

    return wordTalliesByCore;
  }

  async randomizeSelections (qtyNounSelected, qtyVerbSelected, qtyAdjSelected) {
    //chris
    //use test sample
    //return [index1, index2, index3...]
  }

}
