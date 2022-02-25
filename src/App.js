import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [signal, setSignal] = useState("Add");
  const [todo, setTodo] = useState({
    name:"",
    isComplete:false
  });
  // const [addTodo, setAddTodo] = useState(null);

  const onAddTodoChange = (e) => {
    setTodo({
      ...todo ,
      [e.target.name] : e.target.value
    })
  }

  const onAddTodoClick = (e) => {
      setAllTodos([...allTodos , todo])
     setTodo({
       name:"",
       isComplete:false
     })
  }

  const onDelete = (el) => {
    let del = allTodos.filter(x => x.name !== el.name);
    // console.log("x: ", x);
    console.log("el: ", el);
    setAllTodos(del)
    console.log("Delete ", del);
  }

  const onEdit = (el) => {
    let edit = allTodos.find(item=> item.name === el.name)
    setTodo(edit)
    setSignal("Update")
    
  }
  const onUpdate =(el)=>{
// const index = allTodos.indexOf(el)
const list = allTodos.map((it)=>{
  if(it.name === el.name) {
    const updtTodo ={
      name:todo.name,
      isComplete:false
    }
    return updtTodo
  }
  return it ; 
})
setAllTodos(list)
  }
  console.log("Todo", todo);
  return (
    <div className="App">
      <div className="add-todo-list">
        <input type="text" name="name"  value={todo.name} onChange={onAddTodoChange} />
        {
         signal ==="Add" ? <button type="button" onClick={onAddTodoClick}>{"ADD"}</button> : ""
        }
        
      </div>

      <div className="todo-list-items">
        <ul>
          {
          allTodos.map((el, index) => {
              return (
                <div key={index}>
                  <li >{el.name}</li>
                  {signal ==="Add" ?
                    <button className="btn btn-primary" onClick={() =>onEdit(el)}>Edit</button> :
                    <button className="btn btn-default" onClick={()=>onUpdate(el)}>update</button>
                  }
                  
                  <button className="btn btn-danger" onClick={()=>onDelete(el)}>DELETE</button>
                  
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
