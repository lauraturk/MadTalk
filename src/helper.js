
export default class Helper {

  async getTextSample () {
    let jsonText = await fetch('https://byob-madlib.herokuapp.com/api/v1/text_samples/1/words');
    let textSample = await jsonText.json();
    return textSample;
  }

  async distributeSelections () {
    let text = await this.getTextSample()
    console.log(text);

    //Anders
    //use text sample
    // return qtyNounSelected, qtyVerbSelected, qtyAdjSelected
  }

  async randomizeSelections (qtyNounSelected, qtyVerbSelected, qtyAdjSelected) {
    //chris
    //use test sample
    //return [index1, index2, index3...]
  }

}
