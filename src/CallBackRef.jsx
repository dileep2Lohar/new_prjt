import React,{Component} from 'react';

export default class Callback extends Component{
    constructor(props){
        super(props)
        this.textInput = React.createRef()
        this.backRef = null;
        this.setBackRef = e => {
            this.backRef = e
        }
    }

    componentDidMount = () => {
        if(this.backRef){
            this.backRef.focus()
        }
    }

    render(){
        return(
            <div>
                <form action="">
                    name: <input type="text" name="fname" ref={this.setBackRef}/><br/><br/>
                    name: <input type="text" name="password" /><br/><br/>
                </form>
            </div>
        )
    }
} 