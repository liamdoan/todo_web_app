import React, {useState} from 'react'
import './App.css';


const App = () => {

  const [todos, setTodos] = useState([])

  // keep track of current todo
  const [todo, setTodo] = useState("")

  const [todoEditing, setTodoEditing] = useState(null)

  const [editingText, setEditingText] = useState("")

 

  function handleSubmit(e) {
    // need e value, because by default form will refresh the page when submitted
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      // better to have id when working with multiple object
      text: todo,
      completed: false
    }
 
    setTodos([...todos].concat(newTodo))

    // reset input after adding newTodo, by setting todo to an empty string
    setTodo("")
  }



  function toggleComplete(id) {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodos)
  }


  function editTodo(id) {
    const updatedTodos = [...todos].map(todo => {
      if(todo.id === id ) {
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)

     // reset
     setTodoEditing(null)
     setEditingText("")
  }


  function deleteTodo(id) {
    const updatedTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }


  return (
    <div className="wrapper">
      <h1>Tasks for today</h1>

      {/*FORM*/}
      <form className="todo-form" onSubmit={handleSubmit}>
          {/* handleSubmit will run everytime the button is clicked */}
        <input type="text" 
                placeholder="What to do"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
                className="todo-input"/>
        <button className="submit-button" 
                type="submit"
                >
                  Add Tasks
                </button>
      </form>

      {/* LIST */}
      {todos.map(todo => 
          <div className="todo-row" 
                key={todo.id}>
            {todoEditing === todo.id 
            ?   <input type="text" 
                      onChange={(e) => setEditingText(e.target.value)} 
                      value={editingText}/>
            : <div>{todo.text}</div>}
              {/* 'todo' is changable */}
             
              <div className="buttons">
                <input type="checkbox" 
                        onChange={() => toggleComplete(todo.id)}
                        checked={todo.completed}
                        className="check-complete"/>

                {todoEditing === todo.id 
                  ? <button className="submit-edit-btn" 
                            onClick={() => editTodo(todo.id)}>
                      Submit Edit
                    </button>
                  : <button className="edit-btn" 
                            onClick={() => setTodoEditing(todo.id)}>
                      Edit Tasks
                    </button>}

                <button className="delete-btn" 
                        onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button>
              </div>
            
            </div>
            )}
    </div>
  );
}

export default App;
