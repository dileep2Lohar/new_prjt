import React,{ useState, useEffect } from 'react'

const Form = () => {
    const [state, setState] = useState()
    const ChangeHandle = (e) => {
        console.log(e.target.value);
        setState(e.target.value.toUpperCase().substr(0, 5))
    }
    return(
        <div>
            <form>
                <label>Name</label>
                <input type="text" value={state} onChange={ChangeHandle} />
            </form>
        </div>
    )
}
export default Form;