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
        {/* <Register/>
        <Login/> */}
        <Chat/>
      </div>
    </>
  )
}

export default App
