import { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
class item extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    handleDelete() {
        this.props.delete(this.props.id);
    }
    handlePick(e) {
        var { id } = this.props;
        this.props.handlePick(e.target.checked, id)
    }

    render() {
        var { item } = this.props
        let input = item.status === true ? 
            <input type="checkbox" defaultChecked className="item-pick" onChange={this.handlePick} /> : <input type="checkbox" className="item-pick" onChange={this.handlePick} />
        return (
            <div className="item">
                {/* {input} */}
                <input type="checkbox" defaultChecked = {item.status} className="item-pick" onChange={this.handlePick} />
                <div className={item.status === true ? 'item-text true' : 'item-text false'}>
                    <p>{item.name}</p>
                </div>
                <button className="btn-delete" onClick={this.handleDelete}>x</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        handlePick: (status,index)=>{
            dispatch(actions.handlePick(status,index));
        },
        delete: (index)=>{
            dispatch(actions.deleteItem(index));
        }
    }
}

export default connect(null,mapDispatchToProps)(item);