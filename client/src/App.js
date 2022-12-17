import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import List from './pages/List'

function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/search' element={<List/>}/>
      </Routes>
    </div>
  );
}

export default App;
