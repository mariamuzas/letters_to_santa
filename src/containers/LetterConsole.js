import {useState} from 'react';
import LetterBox from '../components/LetterBox'

const LetterConsole = () => {
    // const [letters, setLetters] = useState(0)

    const letters = [
        {author:"Maria", message: "Kaixo Olentzero"},
        {author:"Gabriel", message: "Hello Santa"},
        {author:"Alvaro", message: "Hola Reyes Magos"}]

    return(
        <>
        <h2> This is the letter console</h2>
        <LetterBox letters={letters}/>
        </>
    )
}

export default LetterConsole;