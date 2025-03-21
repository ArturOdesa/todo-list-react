import React from 'react';
import styles from './Task.module.scss';

export default function Task({id, name, completed, removeTask, changeState}) {
    return (
        <li className={styles.task}>
            <input className={styles.task__done} type="checkbox" onChange={() => changeState(id)} checked = {completed} />
            <span className={completed && styles.completed}>{name}</span>
            <button onClick={() => removeTask(id)} className={styles.remove_btn}>X</button>
        </li>
    )
}