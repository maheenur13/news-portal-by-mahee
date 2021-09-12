import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import Header from './Components/Header/Header';
import NavBar from './Components/Header/NavBar/NavBar';
import AllNews from './Components/AllNews/AllNews';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddNews from './Components/Admin/AddNews/AddNews';


export const userContext=createContext();
function App() {
  const [category,setCategory] = useState('business')
  return (
    <Router>
    <userContext.Provider value={[category,setCategory]}>
    <div >
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
        <Header></Header>
        <AddNews></AddNews>
        <AllNews></AllNews>
     
     </Route>
     <Route path="/test">
        <h1>hello</h1>
     </Route>
     </Switch>
     
    </div>
    </userContext.Provider>
    </Router>
  );
}

export default App;
