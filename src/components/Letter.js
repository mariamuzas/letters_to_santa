const Letter = ({author, children}) => {

    return(
        <>
            <li> 
                <p>Author: {author}</p>
                <p>Message: {children}</p>
            </li>
        </>
    )
}

export default Letter;