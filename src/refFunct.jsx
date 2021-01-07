import React,{useEffect, useState} from 'react'

const RefFunt = () => {
    const [state, setState] = useState("")

    const textInput = React.createRef()
   
    const handleClick = (e) => {
        setState(textInput.current.value)
        e.preventDefault()
        console.log(textInput.current.value);
    }

    useEffect( () => {
        textInput.current.focus(); 
    } )

    return(
        <div>
        <h2>typed : {state} </h2>
        <form action="" onSubmit={handleClick} >
            Name : <input type="text" name="name" id="fname" ref={textInput} />
            <input type="submit" value="submit" />  
        </form>
    </div>
    )
}
export default RefFunt;