import words from './GermanWords.json';
import LanguageTest from './LanguageTest_UncontrolledComponent'
  
export default function German() {

	return <LanguageTest 
				words={[...words]} 
				thisLingo='German' 
				nextLabel='To Italian test ▶️' 
				nextPath='/italian' 
			/>
}