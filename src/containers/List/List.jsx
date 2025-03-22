import React from 'react';
import styles from './List.module.scss';
import Task from '../../components/Task/Task'
import { useTasksContext } from '../../context/TasksContext';



export default function List() {

    const { tasks } = useTasksContext();
    return (
        <ul className={styles.tasks__list}>
            {tasks.map((task) =>
                <Task key={task.id} {...task} />
            )}
        </ul>
    )
}