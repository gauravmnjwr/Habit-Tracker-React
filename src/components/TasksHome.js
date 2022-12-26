import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from "../store/slices/tasksSlice";
import { Link } from 'react-router-dom'

function TasksHome() {
    //for opening particular accordion task
    const [expandedIndex, setExpandedIndex] = useState(-1);

    //using to dispatch an action
    const dispatch = useDispatch();

    //rendering all weekdays
    const Weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    //handling removetask by dispatching an action
    const handleDelete = (el) => {
        dispatch(removeTask(el))
    }

    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
            return;
        }
        setExpandedIndex(nextIndex);
    };

    //getting the state from the store and assigning it to new variable
    const statearr = useSelector((state) => {
        return state.tasks;
    })

    //rendering upon the state array and adding elements to it to make it visible on screen
    const renderedList = statearr.map((el, index) => {
        let renderedDay = [];
        for (let i = 0; i <= 6; i++) {
            renderedDay.push(<div key={Math.random() * 9999}>
                {Weekdays[i]}
                <input type="checkbox" />
            </div>)
        }
        const isExpanded = index === expandedIndex;
        return <div key={index}>
            <div onClick={() => handleClick(index)} id='single-habit'>
                <p><b>{el}</b></p>
                <img src="https://cdn-icons-png.flaticon.com/512/7946/7946003.png" alt="delete" onClick={() => handleDelete(el)} />
            </div>
            <div id='days-list'>{isExpanded && <div>{renderedDay}</div>}</div>
        </div>
    })

    return <div id='task-list-container'>
        <Link to="/" className="links">Got to Home</Link>
        <hr />
        <br />
        <h1> Your Habits </h1>
        <div id='habit-tab'>
            {renderedList}
        </div>
    </div>
}


export default TasksHome;