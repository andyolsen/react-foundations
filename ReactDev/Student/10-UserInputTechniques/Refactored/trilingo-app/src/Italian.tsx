import words from './ItalianWords.json';
import LanguageTest from './LanguageTest';
  
export default function Italian() {

	return <LanguageTest 
				words={[...words]} 
				thisLingo='Italian' 
				nextLabel='Home ▶️' 
				nextPath='/' 
			/>
}