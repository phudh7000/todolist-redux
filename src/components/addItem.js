import {Component} from 'react'


class addItem extends Component{

    constructor(props){
        super(props);
        this.state={
            data:""
        }
    }
    handleChange =(e)=>{
        this.setState(
            {
                data: e.target.value
            }
        ) 
    }

    addTask=()=>{
        if(this.state.data==='')return false;
        this.props.addTask(this.state.data);  
        this.setState({
            data:''
        })
        document.getElementById('input-text').focus();
    }

    render(){
        return(
            <div className="addItem">
                <input type='text' placeholder="Full Name" onChange = {this.handleChange} value={this.state.data} id="input-text"></input>
                <button type='submit' className="btn-add" onClick = {this.addTask}>ADD</button>
            </div>
        )
    }
}

export default addItem;