import React from 'react'
import User from './user'

const Key_1 = (props) => {
    const arr = props.number

    const Newarr = arr.map( (num) => {
        return <User name = {num * 4}/>
    } )
    return(
        <div>
            <ul>
                {Newarr}
                <button className="btn btn-primary" >click</button>
            </ul>
        </div>
    )
}
export default Key_1
