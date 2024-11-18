import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Service from './components/Service/Service';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Service/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
