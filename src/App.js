import "./App.scss";
import tdd from "./img/tdd-app.png";
import music from "./img/musicscape.png";
import portfolio from "./img/portfolio.png";
import ContactMe from "./ContactMe";

import { useSpring, animated } from "react-spring";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParticleBackground from "./ParticleBackground";
function App() {
  
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <ul class="navbar-nav mr-auto">
            <li class="px-3">
              <Link to="/">Home</Link>
            </li>
            {/*<li class="px-3">
              <Link to="/about">About</Link>
            </li>*/}
            <li class="px-3">
              <Link to="/contact">Contact me</Link>
  </li>
          </ul>
          <li class="icons px-5">
            <a
              href="https://www.linkedin.com/in/leon-listo/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i class="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/TheNeonLeon"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-github"></i>
            </a>
          </li>
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
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0.8 },
    reset: false,
    config: { duration: 800 },
  });

  return (
    <div>
    <animated.div style={props} className="home-container" >
    <ParticleBackground  />

      <h1>Hello, my name is Leon Listo. I'm a Front-end developer.</h1>
      <h3> Welcome to my portfolio. Check out my projects</h3>
      <div class="container-fluid">
        
        <div class="row">
          <div class="col-md">
            <img class="img-fluid" src={tdd} alt="project"></img>
            <h3>The Meetup Hub</h3>
            <h4>
              Built a responsive web app. You can see different events from a
              static JSON file in a user-friendly way. You can register for an
              event with a form. The data in the form is saved in localStorage
              <hr></hr>
             <b> Technologies:</b> Vuejs, Vue-router, Docker, unit testing with vue test utils and
jest
            </h4>
            <a
              href="https://tdd-vue-app.herokuapp.com/#/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-display"></i>
            </a>
            <a
              href="https://github.com/TheNeonLeon/tdd-app"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-code-slash"></i>
            </a>
          </div>
          <div class="col-md">
            <img class="img-fluid" src={music} alt="project"></img>
            <h3>MusicScape</h3>
            <h4>Me and two classmates have built a music
                app for our master thesis, where you can listen to
music and create an account to then be able to create your own playlists where you can
save songs.
                <hr></hr>
                <b>Technologies:</b> JavaScript, Nuxt.js,
                Bootstrap, Firebase, REST API
            </h4>
            <a
              href="https://musicscape.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-display"></i>
            </a>
            <a
              href="https://github.com/TheNeonLeon/nya-examensarbete"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-code-slash"></i>
            </a>
          </div>
          <div class="col-md">
            <img class="img-fluid" src={portfolio} alt="project"></img>
            <h3>Portfolio</h3>
            <h4>My personal portfolio, built using different types of technologies. It's responsive so it fits for every type of device.
              Feel free to check out the code on Github!
                <hr></hr>
                <b>Technologies:</b> React, React-spring, React-router,
                Bootstrap, Particle.js
            </h4>
          
            <a
              href="https://github.com/TheNeonLeon/react-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <i class="bi bi-code-slash"></i>
            </a>
            </div>
        </div>
        
      </div>

    </animated.div>
    </div>
  );
}

function About() {
  return (
  <div className="page-container">
        <ParticleBackground  />
<h1>About</h1>
    <h2>I'm a passionate Front-end developer who loves converting new ideas and concepts into code. I'm a visual person with an eye for good and modern design.</h2>;
  </div>
  )
}

function Contact() {
  return (
  <div className="contact-container">
    
        <ParticleBackground  />
<div id="contact-wrapper" className="col-md">
  <h2>Contact Me</h2>;
  <ContactMe />
  </div>
  </div>
  )
}

export default App;
