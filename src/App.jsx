import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import React from 'react';
import { v4 as uuid4v } from 'uuid';
import List from './containers/List/List';


function App() {
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });
  const [taskName, setTaskName] = useState('');

  const date = new Date().toLocaleDateString('en-En', { day: 'numeric', month: 'long', year: 'numeric' });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = () => {
    if (taskName.trim()) {
      const newTask = {
        'id': uuid4v(),
        'name': taskName.trim(),
        'completed': false,
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
    }
  };

  const removeTaskHandler = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const changeStateHandler = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

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
            <List tasks={tasks} changeState={changeStateHandler} removeTask={removeTaskHandler} />
          </div>
        </section>
      </main>
    </>
  )
}

// 

export default App
