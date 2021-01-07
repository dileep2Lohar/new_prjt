import React, { Component } from 'react'

// export default class Ref extends Component{
//     constructor(props){
//         super(props);

//         // Creating Ref
//         this.textInput = React.createRef();
//     }
//     componentDidMount = () => {
//         // console.log(this.textInput.current);
//         this.textInput.current.focus()
//     }
//     render(){
//         return(
//             <div>
//                 <form action="">
//                     Name : <input type="text" name="name" id="fname" ref={this.textInput}/><br/><br/>
//                     Password : <input type="text" name="Password" id="Password"  /><br/><br/>
//                 </form>
//             </div>
//         )
//     }
// }

export default class Ref extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            value : " "
        }
        this.textInput = React.createRef();
        
    }

    handleClick = (e) => {
        e.preventDefault()
        // console.log(this.textInput.current.value);
        const Newvalue = this.textInput.current.value
        console.log(Newvalue);
        this.setState({value : Newvalue})
    } 
    
    render(){
        return(
            <div>
                <h2>typed : {this.state.value} </h2>
                <form action="" onSubmit={this.handleClick} >
                    Name : <input type="text" name="name" id="fname" ref={this.textInput}/>
                    <input type="submit" value="submit" />
                    
                </form>
            </div>
        )
    }
}
