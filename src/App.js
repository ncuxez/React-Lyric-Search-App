import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/navbar';
import Home from './components/layout/home';


function App() {

  return (

    <div className="App">
        <Navbar />
        <div className="container">
            <Switch>
                <Route path="/" exact component={ Home }/>
                {/*<Route path="/rooms" exact component={  }/>*/}
                {/*<Route path="/rooms/:room" exact component={  }/>*/}
                {/*<Route component={ Error }/>*/}
            </Switch>
        </div>


    </div>
  );


}

export default App;
