import React from 'react'

//menerima function toggleCompleted sebagai sebuah prop
const TodoItem = ({ todo, toggleCompleted }) => {
    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return { textDecoration: 'line-through' }
        } else {
            return { textDecoration: 'none' }
        }
    }

    return (
        <div style={styles.todoItem}>
            {/* Menambahkan checkbox */}
            <input
                type='checkbox'
                style={styles.checkbox}
                onChange={() => toggleCompleted(todo.id)}
                />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
            <button
                style={styles.button}
                >x</button>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #576d91',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: ' 0 40px',
    },
    checkbox: {
        marginRight: '15px',
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: '#371b8c',
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