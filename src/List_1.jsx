import React from "react";


const List_1 = (props) => {
    const Newnumber = props.number

    const Newvalue  = Newnumber.map( (num) => {
        return <li> {num * 5 } </li>
    })

    return(
        <>
            <h2>dileep lohar</h2>
            <ul>
                { Newvalue }
            </ul>
        </>
    )
}
export default List_1