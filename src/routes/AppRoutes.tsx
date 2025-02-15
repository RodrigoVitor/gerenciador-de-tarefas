import { Routes, Route } from 'react-router-dom';
import Task from '../pages/Task';
import Home from '../pages/Home';

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task/:id" element={<Task />} />
        </Routes>
    )
}