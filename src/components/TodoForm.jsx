import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    //define state 'title'
    const [title, setTitle] = useState('')

    //define function handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(title) //teruskan title sebagai argument
        setTitle('')
    }

    //define function handleChangeTitle
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }


    console.log(title)

    return (
        <div style={styles.container}>
            <form
                onSubmit={(e) => {
                handleSubmit(e)
                }}
            >
                <input
                    type='text'
                    placeholder='Add Todo'
                    style={styles.formInput}
                    //tambahkan event handler 'onChange'
                    onChange={(e) => {
                        handleChangeTitle(e)
                    }}
                    value={title}
                />
                <button style={styles.button}>Add</button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
    },
    formInput: {
        height: '66px',
        width: '40vw',
        fontSize: '16px',
        padding: '0 16px',
    },
    button: {
        height: '70px',
        fontSize: '16px',
        backgroundColor: '#5159b0',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        width: '8vw',
    },
}

export default TodoForm