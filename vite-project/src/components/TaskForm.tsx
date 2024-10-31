import React, { useState } from 'react';
import styles from './TascForm.module.css';

interface TaskFormProps {
  onAddTask: (name: string, status: string, priority: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Low');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(name, status, priority, description);
    setName('');
    setStatus('Pending');
    setPriority('Low');
    setDescription('');
  };

  return (
    <form className={styles["task-form"]} onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Task Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Add Mission</button>
    </form>
  );
};

export default TaskForm;
