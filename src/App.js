import React, { useState } from 'react';
import ToDoList from './ToDoList'

const App = () => {

const [inputList , setinputList] = useState("");
const [items, setItems] = useState([]);

const itemEvent = (event) => {
  setinputList(event.target.value);
};

const listOfItems = () => {
   setItems((oldItems) => {
     return [...oldItems, inputList];
   });
   setinputList("");
};

const deleteItems = (id) => {
  setItems((oldItems) => {
    return oldItems.filter((arrElem,index) => {
      return index !== id;
    });
  });
}

  return(
      <>
        <div className="main_div">
          <div className="center_div">
            <br/>
              <h1>
                ToDo List
              </h1>
            <br/>
              <input type = "text" onChange = {itemEvent} value={inputList} placeholder = "Add a item" />
              <button onClick={listOfItems}> + </button>

              <ol>
                    {items.map( (itemval, index) => {
                      return <ToDoList 
                      key={index} 
                      id={index} 
                      text={itemval} 
                      onSelect={deleteItems} />}) 
                    }
              </ol>
          </div>
        </div>
      </>
  );
}

export default App;






















