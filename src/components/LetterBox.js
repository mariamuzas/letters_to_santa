import Letter from "./Letter"

const LetterBox = ({letters}) => {
    
    const lettersList = letters.map( letter => {
        return (
        <Letter author={letter.author} key={letter.id}>{letter.message}</Letter>
        )
    })
    
    return(
        <>
        <h3>LetterBox component</h3>
        <ul>
            {lettersList}
        </ul>
        </>
    );
};

export default LetterBox;