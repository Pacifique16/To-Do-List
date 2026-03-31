import { useState } from 'react'
import Button from './Button'

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), text: input.trim(), done: false }])
    setInput('')
  }

  const toggleDone = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id))

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>To Do List</h2>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <Button title="Add" bgColor="#4CAF50" onClick={addTask} />
      </div>

      {tasks.length === 0 && (
        <p style={styles.empty}>No tasks yet. Add one above!</p>
      )}

      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.item}>
            <span style={{ ...styles.text, textDecoration: task.done ? 'line-through' : 'none', opacity: task.done ? 0.5 : 1 }}>
              {task.text}
            </span>
            <div style={styles.actions}>
              <Button
                title={task.done ? 'Undo' : 'Done'}
                bgColor={task.done ? '#FF9800' : '#2196F3'}
                onClick={() => toggleDone(task.id)}
              />
              <Button title="Delete" bgColor="#f44336" onClick={() => deleteTask(task.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  container: {
    background: '#fff',
    borderRadius: '12px',
    padding: '32px',
    width: '100%',
    maxWidth: '520px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    height: 'fit-content',
  },
  heading: {
    marginBottom: '24px',
    fontSize: '24px',
    color: '#333',
  },
  inputRow: {
    display: 'flex',
    gap: '10px',
    marginBottom: '24px',
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 14px',
    background: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #eee',
  },
  text: {
    fontSize: '15px',
    color: '#333',
    flex: 1,
    marginRight: '12px',
  },
  actions: {
    display: 'flex',
    gap: '8px',
  },
  empty: {
    color: '#aaa',
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: '16px',
  },
}

export default Todo
