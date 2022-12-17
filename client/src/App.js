import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import List from './pages/List'
import Basket from './pages/Basket'

function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/search' element={<List/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </div>
  );
}

export default App;
