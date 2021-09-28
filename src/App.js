import TodoList from "./components/TodoList";
import { Switch, Route } from 'react-router-dom'
import Header from "./components/Header";
import "./App.css";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />

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
      <div>
        <Header />
        <TodoList />
      </div>
      <Quote />
    </div>
  );
};

export default App;
