import { useState } from "react";
import '../App.css'

const LetterForm = ({onLetterSubmit}) => {
const [author, setAuthor] = useState("")
const [message, setMessage] = useState("")

const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
}

const handleMessageChange = (event) => {
    setMessage(event.target.value)
}

const handleFormSubmit = (event) => {
    event.preventDefault()
    const authorToSubmit = author.trim()
    const messageToSubmit = message.trim()
    if (!authorToSubmit || !messageToSubmit){
        return
    }
    onLetterSubmit({
        author: authorToSubmit, 
        message: messageToSubmit
    })
    setAuthor ("")
    setMessage("")

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
                value={message}
                onChange={handleMessageChange}/>
            <input 
                type="submit" 
                value="Post"/>
        </form>
    )
}

export default LetterForm;