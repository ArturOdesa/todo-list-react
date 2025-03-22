import { createContext, useState, useEffect, useContext } from "react";
import { v4 as uuid4v } from 'uuid';

const TasksContext = createContext();

export const TasksContextProvider = ({ children }) => {
    
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            return JSON.parse(savedTasks);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    const addTask = (taskName) => {
        if (taskName.trim()) {
            const newTask = {
                'id': uuid4v(),
                'name': taskName.trim(),
                'completed': false,
            };
            setTasks([...tasks, newTask]);
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
    };

    return (
        <TasksContext.Provider value={{ tasks, removeTaskHandler, changeStateHandler, addTask }}>
            {children}
        </TasksContext.Provider>
    );
};

export const useTasksContext = () => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('useTasksContext must be used within a TaskContextProvider')
    }

    return context;
}
