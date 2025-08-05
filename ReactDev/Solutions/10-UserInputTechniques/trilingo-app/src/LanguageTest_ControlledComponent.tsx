import { Link } from 'react-router-dom';
import { useState } from 'react';
  
export default function LanguageTest({words, thisLingo, nextLabel, nextPath}: {words: string[], thisLingo: string, nextLabel: string, nextPath: string}) {

	let [correctGuesses, setCorrectGuesses] = useState(0);
	let [totalGuesses, setTotalGuesses] = useState(0);
	let [availableWords, setAvailableWords] = useState(words);
	
	let [guess, setGuess] = useState('');
	let [index, setIndex] = useState(0);
	
	let englishWord: string | undefined
	let translatedWord: string

	if (availableWords.length !== 0) {
		[englishWord, translatedWord] = availableWords[index].split(':'); 
	}

	function onSubmit() {

		if (guess.trim().toLowerCase() === translatedWord) {
			setCorrectGuesses(correctGuesses + 1);
			availableWords.splice(index, 1)
			setAvailableWords(availableWords)
			setIndex(Math.floor(Math.random() * availableWords.length));
		}

		setGuess('');
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
						value={guess}
						placeholder={`What's it in ${thisLingo}?`} 
						autoFocus
						onChange={e => setGuess(e.target.value)} 
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