import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes  */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
