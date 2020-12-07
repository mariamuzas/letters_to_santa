import {useState} from 'react';
import LetterBox from '../components/LetterBox'

const LetterConsole = () => {
    // const [letters, setLetters] = useState(0)

    let [letters, setLetters] = useState([
        {id:1, author:"Maria", message: "Kaixo Olentzero"},
        {id:2, author:"Gabriel", message: "Hello Santa"},
        {id:3, author:"Alvaro", message: "Hola Reyes Magos"}])

    // const change = () => {
    //     setLetters[2].( "No creo en Santa")
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