import './App.css';
import Footer from './componet/Footer';
import Header from './componet/Header';
import './bootstrap.min.css';
import Banner from './componet/Banner';
import Section2 from './componet/Section2';
import Section3 from './componet/Section3';
import Home from './componet/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Section2/>
      <Section3/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
