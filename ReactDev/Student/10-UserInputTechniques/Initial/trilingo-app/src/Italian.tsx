import { Link } from 'react-router-dom';
import { useState } from 'react';
import words from './ItalianWords.json';
  
export default function Italian() {

	let [correctGuesses, setCorrectGuesses] = useState(0);
	let [totalGuesses, setTotalGuesses] = useState(0);
	let [availableWords, setAvailableWords] = useState([...words]);

	let englishWord: string | undefined
	let translatedWord: string
	let index: number;

	if (availableWords.length !== 0) {
		index = Math.floor(Math.random() * availableWords.length);
		[englishWord, translatedWord] = availableWords[index].split(':'); 
	}

	function onSubmit() {		
		const guess = (document.getElementById("guessTextBox") as HTMLInputElement)!.value;
		if (guess.trim().toLowerCase() === translatedWord) {
			setCorrectGuesses(correctGuesses + 1);
			availableWords.splice(index, 1)
			setAvailableWords(availableWords)
		}
		(document.getElementById("guessTextBox") as HTMLInputElement)!.value = "";
		setTotalGuesses(totalGuesses + 1);
	}

	return (
		<>
			<h1>Italian test</h1>

			<div hidden={englishWord === undefined}>
				
				<div className="wordPanel">
					<b>{englishWord}</b>
				</div>
				
				<div className="guessPanel">
					<input 
						type="text" 
						id="guessTextBox" 
						placeholder="What's it in Italian?" 
						autoFocus
						onKeyUp={e => {
							if (e.key === 'Enter')
								onSubmit();
						}}
					/>					
					<button onClick={onSubmit}>Submit</button>
				</div>
			</div>

			<div className="resultPanel">
				Correct guesses: {correctGuesses} out of {totalGuesses}
			</div>	

			<Link to="/">Home ▶️</Link>
		</>
    )
}