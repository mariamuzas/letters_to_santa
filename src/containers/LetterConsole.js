import {useState} from 'react';
import LetterBox from '../components/LetterBox'

const LetterConsole = () => {
    // const [letters, setLetters] = useState(0)

    let [letters, setLetters] = useState([
        {author:"Maria", message: "Kaixo Olentzero"},
        {author:"Gabriel", message: "Hello Santa"},
        {author:"Alvaro", message: "Hola Reyes Magos"}])

    // const change = () => {
    //     setLetters[2].message( "No creo en Santa")
    // }

    return(
        <>
        <h2> This is the letter console</h2>
        <LetterBox letters={letters}/>
        {/* <button onClick = {change}> Grinch </button> */}
        </>
    )
}

export default LetterConsole;