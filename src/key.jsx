import React from "react";
import Key_1 from './Key_1'

// another file is key_1.jsx

const Key = () => {

    const arry = [10,20,30,40]

    return(
        <>
            <Key_1 number={arry} />
        </>
    )
}
export default Key;