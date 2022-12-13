import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

function App() {
  return (
    <div className="w-5/6 h-full mx-auto">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
  );
}

export default App;
