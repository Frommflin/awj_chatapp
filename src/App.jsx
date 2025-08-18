import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideNav from './components/SideNav'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import ChatContextProvider from './context/ChatContextProvider'

function App() {

  return (
    <>
      <ChatContextProvider>
        <SideNav/>
        <div id='page'>
          <Routes>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/' element={<Chat/>}/>
            </Route>
          </Routes>
        </div>
      </ChatContextProvider>
    </>
  )
}

export default App
