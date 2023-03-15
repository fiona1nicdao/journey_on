import './assets/css/reset.css';
import './assets/css/App.scss';

import Header from "./components/header/Header";
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
