import React, { useState } from 'react'

const FormSubmit = () => {
    const [name, setName] = useState("dileep")
    const [email, setEmail] = useState("Dileep2malviya@gmail.com")
    const [pass, setPass] = useState()

    const ChangValue = (e) => {
        setName(e.target.name.toUpperCase())
        setEmail(e.target.name.toUpperCase())
    }
    const handleSubmit = (e) => {
        console.log(e.target);
        e.preventDefault()
        // alert("form Submited")
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input name="field1" type="text" key="field1" value={name.field1} onChange={ChangValue}/>
                <br/><br/>
                <label htmlFor="email">Email</label>
                <input name="field2" type="text" key="field2" value={email.field2} onChange={ChangValue}/>
                <br/><br/>
                {/* <label htmlFor="password">password</label>
                <input name="password" type="text" Key="password" value={pass.password} onChange={ChangValue}/>
                <br/><br/> */}
                <input type="submit" value="submit" />
            </form>
        </div>

    )
}
export default FormSubmit;