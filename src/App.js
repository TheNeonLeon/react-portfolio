import './App.scss';

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
        <a href="https://www.linkedin.com/in/leon-listo/" target="_blank"> <i class="bi bi-linkedin"></i></a>
        <a href="https://github.com/TheNeonLeon" target="_blank"><i class="bi bi-github"></i></a>
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
return <h2>Home</h2>;
}

function Projects() {
return <h2>Projects</h2>;
}

function Contact() {
  return <h2>Contact</h2>
}

export default App;
