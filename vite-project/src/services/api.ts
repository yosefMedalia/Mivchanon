import axios from 'axios';

const API_BASE_URL = 'https://reactexambackend.onrender.com/missions';
const API_KEY = '8417901'; 
// גט לכל המשימות
export const getTasks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error("שגיאה בקבלת המשימות", error);
        throw error;
    }
};

// הוספה
export const addTask = async (task: { name: string; status: string; priority: string; description: string; }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/${API_KEY}`, task);
        return response.data;
    } catch (error) {
        console.error("שגיאה בהוספת המשימה", error);
        throw error;
    }
};

// מחיקה
export const deleteTask = async (id: string) => {
    try {
        await axios.delete(`${API_BASE_URL}/${API_KEY}/${id}`);
    } catch (error) {
        console.error("שגיאה במחיקת המשימה", error);
        throw error;
    }
};

// עדכון סטטוס משימה
export const updateTaskStatus = async (id: string, status: string) => {
    try {
        await axios.post(`${API_BASE_URL}/${API_KEY}/progress/${id}`, { status });
    } catch (error) {
        console.error("שגיאה בעדכון הסטטוס", error);
        throw error;
    }
};
