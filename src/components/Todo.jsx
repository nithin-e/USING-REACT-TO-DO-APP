import React, { useState,useRef } from "react";
import "./Todo.css";


function Todo() {
  const [addTodo, setTodo] = useState("");
  const [displayTodo, setDisplayTodo] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [error,setErro]=useState('')
  const [error1,setErro1]=useState('')
  
 
  const inputRef=useRef(null)


  let gettingInputData = (e) => {
    setTodo(e.target.value);
  };

  const addBottun = (e) => {
    e.preventDefault();
    console.log('this is input ref',inputRef.current.value);
    const input = inputRef.current.value
    if (input === '') {
       return setErro('invalid entry')
    }

    

    
    setDisplayTodo([...displayTodo, addTodo]);
    setTodo("");
    setErro('')

  };

  const deleteTodo = (index) => {
    console.log("....index.....", index);
    let newTodo = displayTodo.filter((value, ind) => ind !== index);
    setDisplayTodo(newTodo)

  
    
  };

  let startEdit = (index) => {
    console.log("....index.....", index);
    setEditingIndex(index)
    setEditValue(displayTodo[index])
   
  };

  const saveEdit = () => {
 const input = inputRef.current.value
    if (input === '') {
       return setErro1('invalid entry')
    }

    const updatedTodos = [...displayTodo];
    updatedTodos[editingIndex] = editValue;
    setDisplayTodo(updatedTodos);
    setEditingIndex(null);
  };

  return (
    <div className="container">
      <h2>TODO APP</h2>
      <form>
        <input
          type="text"
          placeholder="Enter your todo"
          value={addTodo}
          onChange={gettingInputData}  ref={inputRef} />
          {{error} && <p style={{color:"red"}} >{error}</p>}
        <button onClick={addBottun}>ADD</button>
      </form>
      <div>
        <ul>
          {displayTodo.map((value, index) => (
            <li key={index}>
              {editingIndex === index ? (
               
               <div>
               <input  type="text" value={setedit.editValue} ref={inputRef} onChange={(e) => setEditValue(e.target.value)}/>
                {{error1} && <p style={{color:"red"}} >{error1}</p>}
               <button onClick={save}  className="small-btn"> Save</button>
               <button onClick={() => setEditingIndex(null)}  className="small-btn">Cancel </button>
               </div>
                  ) : (
                <div className="dis">
                  {value}
                  <div className="containerr">
                    <button onClick={() => deleteTodo(index)} className="small-btn"> Delete  </button>
                  </div>

                  <div className="containerrr">
                    <button
                      onClick={() => startEdit(index)}
                      className="small-btn"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
