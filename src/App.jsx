//import 'createContext' dari react
import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

//buat context
export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
      deleted: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
      deleted: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
      deleted: false,
    },
  ])

  console.log(todos)

  //define toggleCompleted
  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updateTodos)
  }

  //define deleteTodo
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) =>
      todo.id !== todoId)
    setTodos(updatedTodos)
  }

  //define addTodo
  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
      deleted: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  return (
    //bungkus app dengan provider dari context
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
    
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        {/* render component TodoForm & teruskan functionnya sebagai props */}
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
          /*toggleCompleted={toggleCompleted} dan
            deleteTodo={deleteTodo} tidak diperlukan lagi
          */
          /> 
      </div>
    </TodoContext.Provider>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
    backgroundColor: '#222870',
    color: '#fff',
    width: '50vw',
    margin: '20px auto',
  },
}

export default App
