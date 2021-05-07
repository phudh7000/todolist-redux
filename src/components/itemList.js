import { Component } from 'react';
import Item from './item';
import AddItem from './addItem'


class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    name: 'Duong Hoang',
                    status: true
                },
                {
                    name: 'Duong Manh',
                    status: true
                }, {
                    name: 'Hoang Anh',
                    status: false
                }],
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(item) {
        let arr = [...this.state.items];
        arr.push({ name: item, status: true })
        this.setState({
            items: arr
        })
    }
    delete = (index) => {
        let arr = this.state.items;
        arr.splice(index, 1);
        console.log(arr)
        this.setState({
            items: arr
        })
    }

    pick=(status,index)=>{
        let arr = this.state.items;
        arr[index].status = status;
        this.setState({
            items: arr
        })
    }

    render() {
        var listItem = this.state.items.map((item, index) => {
            return <Item key={index} id={index} item = {item} delete={this.delete} pick ={this.pick} />
        })
        return (
            <div className="itemList">
                <div className="">
                    <AddItem addTask={this.addTask}></AddItem>
                </div>
                <div className="list">
                    {listItem}
                </div>
            </div>


        )
    }

}

export default Items;