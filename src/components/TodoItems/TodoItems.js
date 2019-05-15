import React from 'react';
import './TodoItems.css';
const TodoItems=(props)=>{
    const {items , deleteItem ,lenght} = props;
    let len=lenght ;
    // debugger;
    const ListItems = len ? ( items.map(item=>{
        
        return(
            <div key={item.id} >
            <span className="name">{item.name}</span>
            <span className="age">{item.age}</span>
            <span className="action icon"  onClick={()=>deleteItem(item.id)}>&times;</span>
            </div>
        )
    }) ): ( 
    <span className="p">there is no item to show</span>);

    return(
        <div className="ListItems">
            <div>
            <span className="name title">name</span>
            <span className="age title" >age</span>  
            <span className="action title">Action</span>  
            </div>
            {ListItems}
        </div>
    );
};

export default TodoItems;