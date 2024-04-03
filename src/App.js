import './App.css';
import { Routes, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. getProductDetail 함수 middleware 
// 2. auth state 삭제 -> useSelect()
// 3. PrivateRoute, props->store

function App() {

  const [userName, setUsername] = useState('')
  const [userPassword, setUserPassword] = useState('')


  return (
    <div className='main-wrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route
          path='/login'
          element={
            <Login
              userName={userName}
              setUsername={setUsername}
              userPassword={userPassword}
              setUserPassword={setUserPassword}
            />}
        />
        <Route path='/product/:id' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
