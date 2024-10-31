import React from 'react';
import { deleteTask, updateTaskStatus } from '../services/api';
import styles from './TaskItem.module.css';

interface Task {
    _id: string;
    name: string;
    status: string;
    priority: string;
    description: string;
}

interface TaskItemProps {
    task: Task;
}
// מחיקת משימה
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const handleDelete = async () => {
        try {
            await deleteTask(task._id);
            alert("המשימה נמחקה בהצלחה");
        } catch (error) {
            console.log(error);
        }
    };

    const handleProgress = async () => {
        try {
            const newStatus = task.status === 'Pending' ? 'In Progress' : 'Completed';
            await updateTaskStatus(task._id, newStatus);
            
            alert("הסטטוס עודכן בהצלחה");
        } catch (error) {
            console.log(error);
            
        }
    };

    return (
        <div className={task.status === "Pending" ? styles.pending : task.status ==='In Progress' ? styles.Progress : styles.Completed}>
            <h3>{task.name}</h3>
            <p>סטטוס: {task.status}</p>
            <p>עדיפות: {task.priority}</p>
            <p>תיאור: {task.description}</p>
            <button onClick={handleDelete}>מחק</button>
            {task.status !== 'Completed' && <button onClick={handleProgress}>התקדם</button>}
        </div>
    );
};

export default TaskItem;
