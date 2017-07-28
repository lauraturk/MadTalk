/* eslint-disable */
import React, { Component } from 'react';
import { GameInputList } from './GameInputList';
import { GameOutputList } from './GameOutputList';
/* eslint-enable */

import Helper from '../helpers/helper';

let helper = new Helper();

class App extends Component {
  constructor () {
    super();
    this.state = {
      textSample: '',
      selectedWords: [],
      gameInputWords: [],
      isLoading: false
    };
  }

  startNewGame () {
    helper.getTextSample()
      .then(textSample => {
        const selectedIndices = helper.getPartsOfSpeech(textSample.words);
        this.setState({
          // textSample: response.textSample[0],
          textSample: textSample,
          selectedWords: selectedIndices
        });
      });
  }

  tempTextSample () {
    let blahblah = {
      thing: "Lady/NNP Sophie/NNP '/NNP s/VBZ Society/NNP Splash/NNP When/NNP Sophie/NNP ,/, the/DT least/JJS interesting/JJ of/IN the/DT Talbot/NNP sisters/NNS ,/, lands/NNS her/PRP$ philandering/NN brother/NN -/: in/IN -/: law/NN backside/NN -/: first/JJ in/IN a/DT goldfish/JJ pond/NN in/IN front/NN of/IN all/DT society/NN ,/, she/PRP becomes/VBZ the/DT target/NN of/IN very/RB public/JJ aristocratic/JJ scorn/NN ./.. Her/PRP$ only/RB choice/NN is/VBZ to/TO flee/VB London/NNP ,/, vowing/VBG to/TO start/VB a/DT new/JJ life/NN far/RB from/IN the/DT aristocracy/NN ./.. Unfortunately/RB ,/, the/DT carriage/NN in/IN which/WDT she/PRP stows/VBZ away/RB isn/JJ '/NN t/NN saving/VBG her/PRP from/IN ruin/NN ./.. ./.. ./.. it/PRP '/VBP s/NNS filled/VBN with/IN it/PRP ./.. Rogue/NNP '/: s/NNS Reign/NNP of/IN Ravishment/NNP !/.. Kingscote/NNP ,/, \"/NNP King/NNP ,\"/NNP the/DT Marquess/NNP of/IN Eversley/NNP ,/, has/VBZ never/RB met/VBN a/DT woman/NN he/PRP couldn/VBD '/: t/NN charm/NN ,/, resulting/VBG in/IN a/DT reputation/NN far/RB worse/JJR than/IN the/DT truth/NN ,/, a/DT general/JJ sense/NN that/IN he/PRP '/VBP s/NNS more/RBR pretty/RB face/VB than/IN proper/JJR gentleman/NN ,/, and/CC an/DT irate/NN summons/NNS home/NN to/TO the/DT Scottish/NNP border/NN ./.. When/WRB King/NNP discovers/NNS stowaway/VBP Sophie/NNP ,/, however/RB ,/, the/DT journey/NN becomes/VBZ anything/NN but/RB boring/VBG ./.. War/NN ?/.. Or/CC More/JJR ?/.. He/PRP thinks/VBZ she/PRP '/: s/NNS trying/VBG to/TO trick/VB him/PRP into/IN marriage/NN ./.. She/PRP wouldn/VBD '/: t/NN have/VBP him/PRP if/IN he/PRP were/VBD the/DT last/JJ man/NN on/IN earth/JJ ./.. But/CC carriages/NNS bring/VBG close/JJ quarters/NNS ,/, dark/VBP secrets/NNS ,/, and/CC unbearable/JJ temptation/NN ,/, making/VBG opposites/NNS altogether/RB too/RB attractive/JJ ./.. ./.. ./."
    };
    return blahblah.thing;
  }

  handleGameInputs (wordInputs) {
    const currentGameInputWords = this.state.gameInputWords;

    const newGameInputWords = currentGameInputWords.filter((gameInputWord) => {
      return gameInputWord.wordIndex !== wordInputs.wordIndex;
    });

    if (wordInputs.wordInput !== '') {
      newGameInputWords.push({
        userInputWord: wordInputs.wordInput,
        wordIndex: wordInputs.wordIndex,
        wordType: wordInputs.wordType
      });
    }
    this.setState({
      gameInputWords: newGameInputWords
    });
  }

  render () {
    return (
      <section className="App">
        <section className="text-source-container">
          <h2>new route: (?) section to select text source</h2>
          <button className="App-startBtn" onClick={() => this.startNewGame()}>start game</button>
        </section>
        <GameInputList selectedWordObj={ this.state.selectedWords }
          handleGameInputs={ this.handleGameInputs.bind(this) }/>
        <GameOutputList textSample={ this.state.textSample }
          gameInputWords={ this.state.gameInputWords }/>
      </section>
    );
  }
}

export default App;
