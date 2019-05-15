import React , {Component} from 'react';
import './App.css';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  state={
    items:[{id:1,name:"Jone",age:22},
    {id:2,name:"Androu",age:32},
    {id:3,name:"tom",age:62}]
  };

  deleteItem=(id)=>{
    let items = this.state.items.filter(item =>{
      return item.id!== id;
    })
    this.setState({items})

  }


   addItem=  (item) => {
    item.id=Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

 render(){
  return (
    <div className="App container">
    <h2 className="text-center animated slideInDown">To Do App</h2>
    <TodoItems items = {this.state.items} deleteItem={this.deleteItem}  lenght={this.state.items.length}/>
    <AddItem add={this.addItem} />
    </div>
  );
 }
}

export default App;
