import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'


function App() {
   

  return (
    <UserContextProvider>
     < Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
