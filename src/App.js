import { Component } from 'react'
import ItemList from './components/itemList'
import './App.css'

class App extends Component {

  render() {
    return (

      <div className="container">
        <h1>TO DO LIST</h1>
        <ItemList />
      </div>
    );
  }
}
export default App;
