import { Component } from 'react';
import Item from './item';
import AddItem from './addItem'
import {connect} from 'react-redux'


class Items extends Component {

    render() {
        console.log(this.props)
        var listItem = this.props.items.map((item, index) => {
            return <Item key={index} id={index} item = {item} />
        })
        return (
            <div className="itemList">
                <div className="">
                    <AddItem></AddItem>
                </div>
                <div className="list">
                    {listItem}
                </div>
            </div>


        )
    }

}

const mapStateToProps =(state)=>{
    return {
        items: state.items
    }
}

export default connect(mapStateToProps,null)(Items);