import React from 'react';

const typedCorrentlyStyle = {
    "backgroundColor" : "#34eb77"
}

const currentStyle = {
    "textDecoration" : "underline"
}

const getCurrentWord = (words, player) => {
    return <span style={currentStyle}>{words[player.currentWordIndex]} </span>
}

const getTypedWords = (words, player) => {
    let typedWords = words.slice(0,player.currentWordIndex);
    typedWords = typedWords.join(" ");
    return <span style={typedCorrentlyStyle}>{typedWords}</span>
}

const getWordsToBeTyped = (words, player) => {
    let wordsToBeTyped = words.slice(player.currentWordIndex + 1, words.length)
    wordsToBeTyped = wordsToBeTyped.join(" ");
    return <span> {wordsToBeTyped}</span>
}

const DisplayWords = ({words,player}) => {
  return(
      <>
        {getTypedWords(words,player)}
        {getCurrentWord(words, player)}
        {getWordsToBeTyped(words, player)}
      </>
  )
};

export default DisplayWords;
