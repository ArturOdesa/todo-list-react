import React from 'react';
import styles from './List.module.scss';
import Task from '../../components/Task/Task'



export default function List({tasks, changeState, removeTask                        }) {
    return (
        <ul className={styles.tasks__list}>
            {tasks.map((task) =>
                <Task key={task.id} {...task} removeTask={removeTask} changeState={changeState} />
            )}
        </ul>
    )
}