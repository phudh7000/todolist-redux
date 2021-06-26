import {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

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
        console.log('hihi')
        if(this.state.data==='')return false;
        // this.props.addTask(this.state.data);  
        this.setState({
            data:''
        })
        // console.log(this.state.data)
        this.props.addTask(this.state.data);
        document.getElementById('input-text').focus();
    }

    render(){
        // console.log(this.props)

        return(
            <div className="addItem">
                <input type='text' placeholder="Full Name" onChange = {this.handleChange} value={this.state.data} id="input-text"></input>
                <button type='submit' className="btn-add" onClick = {this.addTask}>ADD</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        // state: state
    }
}

const mapDispatchToProps = (dispatch, props)=>{
    return{
        addTask: (obj)=>{
            dispatch(actions.addItem(obj))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(addItem);