import { useState } from "react";
import '../App.css'

const LetterForm = () => {
const [author, setAuthor] = useState("")
const [text, setText] = useState("")

const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
}

const handleTextChange = (event) => {
    setText(event.target.value)
}

    return (
        <form>
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