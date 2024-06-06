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
                //Memberikan id dari todo sebagai argument
                onChange={() => toggleCompleted(todo.id)}
                />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #576d91',
        fontSize: '24px',
        //Tambahkan styles di bawah sini
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        paddingLeft: '25px',
    },
    checkbox: {
        marginRight: '15px',
        height: '18px',
        width: '18px',
    },
}

export default TodoItem