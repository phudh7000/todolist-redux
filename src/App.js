import { Component } from 'react'
import ItemList from './components/itemList'
import './App.css'
import store from './reducers/index';
import {Provider} from 'react-redux'
class App extends Component {

  render() {
    return (
      <Provider store = {store}>
      <div className="container">
        <h1>TO DO LIST</h1>
        <ItemList />
      </div>
      </Provider>
    );
  }
}
export default App;
