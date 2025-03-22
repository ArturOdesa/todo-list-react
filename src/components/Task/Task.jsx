import React from 'react';
import styles from './Task.module.scss';
import { useTasksContext } from '../../context/TasksContext';

export default function Task({ id, name, completed }) {
    
    const { removeTaskHandler, changeStateHandler } = useTasksContext();
    return (
        <li className={styles.task}>
            <input className={styles.task__done} type="checkbox" onChange={() => changeStateHandler(id)} checked = {completed} />
            <span className={completed ? styles.completed : ''}>{name}</span>
            <button onClick={() => removeTaskHandler(id)} className={styles.remove_btn}>X</button>
        </li>
    )
}