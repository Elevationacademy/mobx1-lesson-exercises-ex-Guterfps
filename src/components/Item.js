import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
      editItem = () => {
        let change=prompt("Please enter your change",this.props.location)
        this.props.store.editItem(this.props.item,change)
      }
      deleteItem = () => {
        this.props.store.deleteItem(this.props.item)
      }
    render() {
      
        return (
            <div className ={this.props.completed ? "crossed": null}>
             <input type="checkbox" onClick = {this.checkItem} value={this.props.item}/>{this.props.item} {this.props.location} <button onClick={this.editItem}>editButton</button><button onClick={this.deleteItem}>delete</button>
      {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */} 
            </div>)
    }
}

export default Item