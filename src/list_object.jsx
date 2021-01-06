import React from 'react';

const List_obj = () => {
    
    const state = {
        user : [
            { id: 1, name: "dileep", password: "12233" },
            { id: 2, name: "Think", password: "4869" },
            { id: 3, name: "Tanker", password: "4824" }
        ]
    }

    const NewList = state.user.map( (users) => {
        console.log(users);
        return <p key={users.id}>id : {users.id}, name : {users.name}, password : {users.password}</p>
    } )

    console.log(state.user[1].id)
    return(
        <div>
         {NewList} 
             
                {
                    state.user.map( (users) => { return <h1 key={users.id}>id : {users.id}, name : {users.name}, password : {users.password}</h1>  } )
                } 
            
        </div>
    )
}
export default List_obj;