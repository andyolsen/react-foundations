import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
  
export default function LanguageTest({words, thisLingo, nextLabel, nextPath}: {words: string[], thisLingo: string, nextLabel: string, nextPath: string}) {

	let [correctGuesses, setCorrectGuesses] = useState(0);
	let [totalGuesses, setTotalGuesses] = useState(0);
	let [availableWords, setAvailableWords] = useState(words);

	let guessRef = React.useRef<HTMLInputElement>(null); 

	let englishWord: string | undefined
	let translatedWord: string
	let index: number;

	if (availableWords.length !== 0) {
		index = Math.floor(Math.random() * availableWords.length);
		[englishWord, translatedWord] = availableWords[index].split(':'); 
	}

	function onSubmit() {

		const guessElem = guessRef.current;
		
		if (guessElem!.value.trim().toLowerCase() === translatedWord) {
			setCorrectGuesses(correctGuesses + 1);
			availableWords.splice(index, 1)
			setAvailableWords(availableWords)
		}

		guessElem!.value = '';
		setTotalGuesses(totalGuesses + 1);
	}

	return (
		<>
			<h1>{thisLingo} test</h1>

			<div hidden={englishWord === undefined}>
				
				<div className='wordPanel'>
					<b>{englishWord}</b>
				</div>
				
				<div className='guessPanel'>
					<input 
						type='text' 
						ref={guessRef} 
						placeholder={`What's it in ${thisLingo}?`} 
						autoFocus
						onKeyUp={e => {
							if (e.key === 'Enter')
								onSubmit();
						}}
					/>				
					<button onClick={onSubmit}>Submit</button>
				</div>
			</div>

			<div className='resultPanel'>
				Correct guesses: {correctGuesses} out of {totalGuesses}
			</div>	

			<Link to={nextPath}>{nextLabel}</Link>
		</>
    )
}