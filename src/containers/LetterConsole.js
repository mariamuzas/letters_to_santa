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

    // const change = () => {
    //     setLetters[2].( "No creo en Santa")
    // }

    return(
        <>
        <LetterBox letters={letters}/>
        {/* <button onClick = {change}> Grinch </button> */}
        <div>
            <h2>Add a letter:</h2>
            <LetterForm />
        </div>
        </>
    )
}

export default LetterConsole;