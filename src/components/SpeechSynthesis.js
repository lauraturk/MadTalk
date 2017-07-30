import React from 'react';

const SpeechSynthesis = window.SpeechSynthesis ||
                    window.webkitSpeechSynthesis ||
                    window.mozSpeechSynthesis;

// const synth = SpeechSynthesis;

export const speakMe = (prompt) => {
  console.log('speakMe here', prompt);
  // SpeechSynthesis.speak(prompt)
}
