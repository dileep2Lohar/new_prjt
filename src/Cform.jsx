import React, { useState } from 'react'

const NewForm = () => {
    const [name, setName] = useState("dileep")
    const [email, setEmail] = useState("Dileep2malviya@gmail.com")
    const [pass, setPass] = useState()

    const ChangValue = (e) => {
        setName(e.target.name.toUpperCase())
        setEmail(e.target.name.toUpperCase())
        // const Newvalue = e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value

        // setPass(e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value)

    }
    const [inputs, setInputs] = useState({})
    return (
        <div>
            <form action="">
                <label htmlFor="name">Name</label>
                <input name="field1" type="text" Key="field1" value={name.field1} onChange={ChangValue}/>
                <br/><br/>
                <label htmlFor="email">Email</label>
                <input name="field2" type="text" Key="field2" value={email.field2} onChange={ChangValue}/>
                <br/><br/>
                <label htmlFor="password">password</label>
                {/* <input name="password" type="text" Key="password" value={pass.password} onChange={ChangValue}/> */}
                <br/><br/>
            </form>
        </div>


        // <div>
        //     <form action="">
        //         <label htmlFor="field1">Name</label>
        //         <input name="field1" type="text" key="field1" value={inputs.field1} onChange={({ target }) => setInputs(state => ({ ...state, field1: target.value }))} />
        //         <br /><br />
        //         <label htmlFor="field2">Email</label>
        //         <input name="field2" type="text" key="field2" value={inputs.field2} onChange={({ target }) => setInputs(state => ({ ...state, field2: target.value }))} />
        //         <br /><br />
        //     </form>
        // </div>
    )
}
export default NewForm;