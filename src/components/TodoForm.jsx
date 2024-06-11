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

    //check if function handleChangeTitle berfungsi
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
                    placeholder='Add your Todo'
                    style={styles.formInput}
                    //tambahkan event handler 'onChange'
                    onChange={(e) => {
                        handleChangeTitle(e)
                    }}
                    value={title} //atur nilai dari input sesuai state 'title'
                />
                <button style={styles.button}>Add Todo</button>
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
        width: '40%',
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
    },
}

export default TodoForm