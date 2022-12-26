import Dashboard from './components/Dashboard';
import TasksHome from './components/TasksHome';
import { Routes, Route } from 'react-router-dom'



function App() {
    return (<div>
        <Routes>
            {/* adding path of home to Dashboard */}
            <Route path='/' element={<Dashboard />} />

            {/* adding path of tasks to /tasks */}
            <Route path='/tasks' element={<TasksHome />} />
        </Routes>

    </div>);
}




export default App;