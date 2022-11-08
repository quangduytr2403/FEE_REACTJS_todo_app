import { useState } from 'react';
import './App.css';
import TodoItem from './Components/TodoItem';

function App() {
  const [todoList, setTodoList] = useState([]);  

  //Add todo item
  const addTodo = (event) => {
    //13 is keyCode of Enter
    if((event.type === 'keyup' && event.keyCode == 13) || (event.type === 'click')) {
      let text = document.getElementsByTagName("input")[0].value.trim();
      if(text === '') {
        return;
      }
      setTodoList(
        [
          {title: text, isCompleted: false},
          ...todoList
        ] 
      );
      //Clear input
      document.getElementsByTagName("input")[0].value = '';
    }
  }

  //Toggle state of todo item
  const toogleState = (item) => {
    const isCompleted = item.isCompleted;
    const index = todoList.indexOf(item);
    setTodoList(
      [
        ...todoList.slice(0, index),
        {
          ...item,
          isCompleted: !isCompleted
        },
        ...todoList.slice(index + 1)
      ]
    );
  };
  

  //Delete item
  const deleteItem = (event, item) => {
    event.stopPropagation();
    const index = todoList.indexOf(item);
    setTodoList(
      [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1)
      ]
    );
  } 

  return (
    <div className='container col-6 offset-3'>
      <h3>To-Do List</h3>
      <p>Enter text into the input fields to add items to your list.</p>
      <p>Click the "X" to remove the item from your list.</p>
      <p>Click the item to mark it as complete</p>
      <div className="form-group d-flex justify-content-center my-5">
        <input type="text" className="form-control" placeholder="Input to do" onKeyUp={addTodo}/>
        <button type="submit" className="btn btn-primary" onClick={addTodo}><i className="fas fa-plus"></i></button>
      </div>
      <div className='col-6 offset-3'>
        {todoList && todoList.map((item, index) => <TodoItem 
          key={index} 
          item={item} 
          onClickDelete={(event) => deleteItem(event, item)}
          onClickToogle={() => toogleState(item)}
        />)}
      </div>
    </div>
  );
};

export default App;
