import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/home" element={<h1>Home Page</h1>} />
          <Route path="/profile" element={<h1>User Profile Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
