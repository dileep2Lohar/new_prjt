import React from 'react'

const Users = (props) => {
    console.log(props.name);
    return <li>{props.name}</li>
}
export default Users;