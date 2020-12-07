import {useState} from 'react';
import LetterBox from '../components/LetterBox'

const LetterConsole = () => {
    const [letters, setLetters] = useState(0)

    return(
        <>
        <h2> This is the letter console</h2>
        <LetterBox />
        </>
    )
}

export default LetterConsole;