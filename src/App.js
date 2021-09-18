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
            <Link to="/about">About</Link>
          </li>
          <li class="px-3">
            <Link to="/contact">Contact me</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
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

function About() {
return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>
}

export default App;
