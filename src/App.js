import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Tools from './components/Tools.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import All from './components/All';
import ProjectVideo from './components/ProjectVideo';

function App() {
  return (
    <div className="App">
 
      
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path='/' component={All} element={<All/>} />
        <Route  path='/home' component={Header} element={<Header />} />
        <Route  path='/about' component={About}  element={<About />} />
        <Route  path='/projects' component={Projects} element={<Projects />} />
        {/* <Route  path='/projectVideo' component={ProjectVideo} element={<ProjectVideo />} /> */}
        <Route  path='/skills' component={Skills} element={<Skills />} />
        <Route  path='/tools' component={Tools} element={<Tools />} />
        <Route  path='/contact' component={Contact} element={<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    

    </div>
  );
}

export default App;
