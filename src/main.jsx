import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { TasksContextProvider } from './context/TasksContext.jsx';

createRoot(document.getElementById('root')).render(
    <TasksContextProvider>
        <App />
    </TasksContextProvider>
)
