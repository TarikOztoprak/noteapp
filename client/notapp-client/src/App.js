import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './components/Home';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Notes from './components/Notes';
import Note from './components/Note';
function App() {
  return (
    <Router>
    
        <NavBar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path={"/folders/:id/categories/:id2/notes/:id3"} children={<Note/>}/>
          <Route path={"/folders/:id/categories/:id2"} children={<Notes/>}/>
          <Route path="/folders/:id" children={<Categories/>}/>
          <Route path="*">
            <h1>404 NOT FOUND</h1>
          </Route>

        </Switch>
     
    </Router>
  );
}

export default App;
