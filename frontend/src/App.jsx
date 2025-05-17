
import './App.css';
import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Create from './pages/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          < Route path='' element={<Home/>} />
          < Route path='/about' element={<About/>} />
          < Route path='/create' element={<Create/>} />
        </Route>

      </Routes>
    </div>

  );
}

export default App;
