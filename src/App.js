import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/navbar';
import Home from './components/layout/home';
import Lyrics from './components/tracks/lyrics';


function App() {

  return (

    <div className="App">
        <Navbar />
        <div className="container">
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/lyrics/track/:id" exact component={ Lyrics }/>
                {/*<Route component={ Error }/>*/}
            </Switch>
        </div>


    </div>
  );


}

export default App;
