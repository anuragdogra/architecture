
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import NewsLetter from './Component/NewsLetter';
import Testimonials  from './Component/Testimonials';
import Works from './Component/Works';
import Contact from './Component/Contact';
function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Works/>
     <Testimonials/>
     <NewsLetter/>
     <Contact/>
    </div>
  );
}

export default App;
