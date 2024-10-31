import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App: React.FC = () => {
    return (
        <div>
            <h1>Military Operations Dashboard</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;
