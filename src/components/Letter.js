const Letter = ({author, children}) => {

    return(
        <>
            <li> 
                <p > {children}! Author: {author} </p>
            </li>
        </>
    )
}

export default Letter;