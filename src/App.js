import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  addItem = () => {
   
    this.props.store.addItem(this.state.newItem)
  }
  render() {
    return (
      <div className="App">
        <input onChange = {this.handleChange}/>
        <button onClick = {this.addItem}>Add</button>
      {this.props.store.list.map((i,ind)=><Item completed={i.completed} item={i.name} key = {ind} store = {this.props.store} location={i.location} />)}  
      < DevTools />
      </div>
     
    );
  }
}

export default App;
