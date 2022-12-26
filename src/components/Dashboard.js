import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "../store/slices/tasksSlice";
import { Link } from 'react-router-dom'

function Dashboard() {
    //use to dispatch the action
    const dispatch = useDispatch();
    const [term, setTerm] = useState('');

    //handling addTask by dispatching an action
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(term))
        setTerm('');
    }
    const handleInput = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div id="addtask-container">
            <Link to='tasks' className="links">Go to your Tasks</Link>
            <hr />
            <h1>Tasks</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Add Task </label>
                <input type="text" name="" id="" onChange={handleInput} value={term} />
                <button>Submit</button>
            </form>
        </div>);
}




export default Dashboard;