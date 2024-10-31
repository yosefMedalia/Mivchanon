import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';

interface Task {
    _id: string;
    name: string;
    status: string;
    priority: string;
    description: string;
}

//  רשימת המשימות
const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
            } catch (error) {
                alert("שגיאה בטעינת המשימות");
            }
        };
        fetchTasks();
    }, []);

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
