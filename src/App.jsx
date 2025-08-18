import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideNav from './components/SideNav'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/register'

function App() {

  return (
    <>
      <SideNav/>
      <div id='page'>
        <Routes>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Chat/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
