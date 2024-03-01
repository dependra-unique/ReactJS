
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './contextApi/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React with Dependra and share is important with chai aur code</h1>

      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
