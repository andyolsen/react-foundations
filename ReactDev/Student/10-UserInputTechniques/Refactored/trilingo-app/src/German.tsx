import words from './GermanWords.json';
import LanguageTest from './LanguageTest';
  
export default function German() {

	return <LanguageTest 
				words={[...words]} 
				thisLingo='German' 
				nextLabel='To Italian test ▶️' 
				nextPath='/italian' 
			/>
}