import React, { useContext } from 'react'
import { TodoContext } from '../App'


const TodoItem = ({ todo }) => {
    const { toggleCompleted, deleteTodo } = useContext(TodoContext)
    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return { textDecoration: 'line-through' }
        } else {
            return { textDecoration: 'none' }
        }
    }

    return (
        <div style={styles.todoItem}>
            {/* checkbox button */}
            <input
                type='checkbox'
                style={styles.checkbox}
                onChange={() => toggleCompleted(todo.id)}
                />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
            <button //delete button
                style={styles.button}
                onClick={() => deleteTodo(todo.id)}>x</button>
        </div>
    )
}

const styles = {
    todoItem: {
        borderBottom: '1px solid #fff',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: ' 0 40px',
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    checkbox: {
        marginRight: '15px',
        height: '18px',
        width: '18px',
        accentColor: '#5AE73C',
    },
    button: {
        backgroundColor: '#A5003D',
        color: '#fff',
        height: '25px',
        width: '25px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    }
}

export default TodoItem