import React from 'react'
import List_1 from './List_1'

// another dile List_1.jsx

const ary = [0,1,2,3,4]

// const Arry = NumFunt

// const Newarry = funt

const Listary = () => {

    return(
        <>
        <h2>Think tanker 
            <ul>
                {
                    ary.map( (num) => {
                        return <li> {num * 4} </li>
                    } )
                }
            </ul>    
        </h2>
        <List_1 number={ary} />
        </>
    )
}
export default Listary