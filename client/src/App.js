import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from'./Pages/Home.jsx'
import SignIn from './Pages/SignIn.jsx'
import SignUp from'./Pages/SignUp.jsx'
import Complain from'./Pages/Complain.jsx'
import WardInfo from'./Pages/WardInfo.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/signin' element={<SignIn></SignIn>}></Route>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/signup' element={<SignUp></SignUp>}></Route>
        <Route exact path='/ward' element={<WardInfo></WardInfo>}></Route>
        <Route exact path='/complain' element={<Complain></Complain>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
