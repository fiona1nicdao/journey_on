import './assets/css/reset.css';
import './assets/css/App.scss';

import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header";
import Home from './pages/home/Home';
import Travel from './pages/travel/Travel';
import Code from './pages/code/Code';
import Test from './pages/test/Test';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/travel' element={<Travel/>}/>
        <Route path='/code' element={<Code/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
