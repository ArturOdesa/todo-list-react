import styles from './App.module.scss';
import { useState } from 'react';
import React from 'react';
import List from './containers/List/List';
import { useTasksContext } from './context/TasksContext';


function App() {

  const { tasks, addTask } = useTasksContext();

  const [taskName, setTaskName] = useState('');

  const date = new Date().toLocaleDateString('en-En', { day: 'numeric', month: 'long', year: 'numeric' });

  const addTaskHandler = () => {
    addTask(taskName);
    setTaskName('');
  };
  

  

  return (
    <>
      <main className={styles.main}>
        <header className={styles.main__header}>
          <div className={styles.container}>
            <div className={styles.header__top}>
              <h1 className={styles.title}>Note your tasks</h1>
              <p className={styles.date}>{date}</p>
            </div>
            <div className={styles.header__bottom}>
              <input type="text" placeholder='Task name' value={taskName} onChange={(e) => {
                setTaskName((e.target.value));
              }}
              onKeyDown={(e) => {
                e.key === 'Enter' && addTaskHandler();
              }}/>
              <button onClick={(addTaskHandler)}>+</button>
            </div>
          </div>
        </header>
        <section>
          <div className={styles.container}>
            <p hidden={tasks.length}>No any tasks...</p>
            <List />
          </div>
        </section>
      </main>
    </>
  )
}

// 

export default App
