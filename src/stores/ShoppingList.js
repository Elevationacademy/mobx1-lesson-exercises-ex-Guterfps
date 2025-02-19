import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = []
    @observable length
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
   @action addItem = (name) => {
       
        let item = new Item(name)
        this.list.push(item)
    }
  @action  editItem = (name,location) => {
        let item = this.list.find(i => i.name === name)
        item.location=location
    }
   @action deleteItem = (name) => {
        let list = this.list.filter(i => i.name !== name)
        this.list=list
    } 
}

