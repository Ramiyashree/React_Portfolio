import React from "react";
import { HashRouter as Router, BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Error_404 from "./pages/Error_404";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavigationBar/>
      <Switch>
            <Route exact path={ "/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/education"} component={Education} />
            <Route exact path={"/experience"} component={Experience} />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/skills"} component={Skills} />
            <Route exact path={"/achievements"} component={Achievements} />
            <Route component={Error_404} />
    </Switch>
    <Footer style={{ zIndex: -2 }} />
    </div>
    </BrowserRouter>

  );
}

export default App;
