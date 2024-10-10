import React from 'react'
import EditImg from '../assets/edit.png'
import DeleteImg from '../assets/delete.png'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                {/*<FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />*/}
                <img src={EditImg} className="edit-icon" onClick={() => editTodo(task.id)} />
                <img src={DeleteImg} className="delete-icon" onClick={() => deleteTodo(task.id)} /> 
            </div>
        </div>
    )
};