import React from 'react'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                {/*<FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />*/}
                <img src="./src/assets/edit.png" className="edit-icon" onClick={() => editTodo(task.id)} />
                <img src="./src/assets/delete.png" className="delete-icon" onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
};