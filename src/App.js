import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/intro'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contact from './components/Contact'
import SideNav from './components/Sidenav'

function App() {

  document.body.style.backgroundColor = "rgb(10 25 47)";
  
  return (
    <>
    <div className="App">
      <Navbar />
      <SideNav />
      <Intro />
      <About  />
      <Skills />
      <Project />
      <Contact />


    </div>

    </>
  );
}

export default App;
