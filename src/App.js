import './App.scss';
import tdd from './img/tdd-app.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
          <li class="px-3">
            <Link to="/">Home</Link>
          </li>
          <li class="px-3">
            <Link to="/projects">Projects</Link>
          </li>
          <li class="px-3">
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
        <li class="icons px-5">
        <a href="https://www.linkedin.com/in/leon-listo/" target="_blank" rel="noreferrer"> <i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/TheNeonLeon" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
        </li>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  </Router>
);
}



function Home() {
return (
  <div className="home-container">
    <h1>Hello, my name is Leon Listo. Welcome to my portfolio.</h1>
    <div class="container-fluid">
    <div class="row">
    <div class="col-md">
      <img class="img-fluid" src={tdd} alt="project"></img>
    </div>
    <div class="col-md">
    <img class="img-fluid" src={tdd} alt="project"></img>
    </div>
    <div class="col-md">
    <img class="img-fluid" src={tdd} alt="project"></img>
    </div>
   </div>
  </div>
  </div>
  
)
}

function Projects() {
return <h2>Projects</h2>;
}

function Contact() {
  return <h2>Contact</h2>
}

export default App;
