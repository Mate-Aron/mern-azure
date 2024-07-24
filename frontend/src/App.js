import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Fotter';
import Login from './components/Login';
import Signup from './components/Signup';
//import Register from './components/Register';
import Home from './components/Home';
import Profile from './components/Profile';
import Vote from './components/Vote';
function App() {
  return (
    <div className='app-big-div'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/News' element={ <h1> Hír </h1> } />
          <Route path='/Vote' element={ <Vote /> } />
          <Route path='/Profile' element={ <Profile /> } />
          <Route path='/Logout' element={ <h2>asd</h2> } />
          
          
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
