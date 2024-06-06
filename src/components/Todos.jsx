import React from 'react'
import TodoItem from './TodoItem'

//menerima function toggleCompleted sebagai sebuah grup
const Todos = ({ todos, toggleCompleted }) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        //teruskan function toggleCompleted ke component ke TodoItem
                        toggleCompleted={toggleCompleted}
                    />
                )
            })}
        </div>
    )
}

const styles = {
    container: {
        width: '50%',
        margin: '0 auto',
    },
}

export default Todos