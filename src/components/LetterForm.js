import { useState } from "react";
import '../App.css'
import Letter from "./Letter";

const LetterForm = () => {
const [author, setAuthor] = useState("")
const [text, setText] = useState("")

const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
}

const handleTextChange = (event) => {
    setText(event.target.value)
}

const handleFormSubmit = (event) => {
    event.preventDefault()
    const authorToSubmit = author.trim()
    const textToSubmit = text.trim()
    if (!authorToSubmit || !textToSubmit){
        return
    }
    setAuthor ("")
    setText("")

}

    return (
        <form className ="letter-form" onSubmit = {handleFormSubmit}>
            <input 
                type="text" 
                placeholder="Your Name" 
                value={author}
                onChange={handleAuthorChange}/>
            <input 
                type="text" 
                placeholder="Your Letter" 
                value={text}
                onChange={handleTextChange}/>
            <input 
                type="submit" 
                value="Post"/>
        </form>
    )
}

export default LetterForm;