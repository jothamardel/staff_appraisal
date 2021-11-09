import './App.css';
import {  Route, Routes } from 'react-router-dom'
import CustomTable from './CustomTable';
import Dashboard from './Dashboard';
import Hero from './Hero';
import RecordPerformance from './Record-Performance';
import CardList from './CardList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/record' element={<RecordPerformance />} />
        <Route exact path='/view' element={<CustomTable />} />
        <Route exact path='/teacher' element={<CardList />} />
      </Routes>
    </div>
  );
}

export default App;
