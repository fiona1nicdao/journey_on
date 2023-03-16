import './assets/css/reset.css';
import './assets/css/App.scss';

import {Routes, Route} from 'react-router-dom'

import Header from "./components/header/Header";
import Home from './pages/home/Home';
import Travel from './pages/travel/Travel';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/travel' element={<Travel/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
