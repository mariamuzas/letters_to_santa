import {useState} from 'react';
import LetterBox from '../components/LetterBox'
import LetterForm from "../components/LetterForm";
import '../App.css'

const LetterConsole = () => {
    // const [letters, setLetters] = useState(0)

    let [letters, setLetters] = useState([
        {id:1, author:"Maria", message: "Kaixo Olentzero"},
        {id:2, author:"Gabriel", message: "Hello Santa"},
        {id:3, author:"Alvaro", message: "Hola Reyes Magos"}])

    const addLetter = (submittedLetter) => {
        submittedLetter.id = Date.now()
        const updatedLetters = [...letters, submittedLetter]
        setLetters(updatedLetters)
    }

    return(
        <>
        <div>
            <h2>Add a letter:</h2>
            <LetterForm onLetterSubmit= {(letter) => addLetter(letter)}/>
        </div>
        <LetterBox letters={letters}/>
        {/* <button onClick = {change}> Grinch </button> */}
        </>
    )
}

export default LetterConsole;