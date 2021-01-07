import React,{ useState, useEffect } from 'react'

const Text = () => {

    const [state, setState] = useState("Hello There, Some Text Aera In Text Aera")

    const ChangeHandle = (e) => {
        setState(e.target.value.toUpperCase().substr(0, 30))
    } 

    return(
        <div>
            <form>
                <textarea value= {state} onChange={ChangeHandle} />
            </form>
        </div>
    )
}
export default Text;