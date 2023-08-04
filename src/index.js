import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Routes, Redirect} from 'react-router-dom';
import App from './App';
import Login from './components/login'
import Signup from './components/signup'


ReactDOM.render(
  <>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/login'element={<Login/>}/>
      <Route path='/signup'element={<Signup/>}/>
      
    </Routes>
   </BrowserRouter>
  </>,
  document.getElementById('root')
)


