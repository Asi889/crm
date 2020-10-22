import React from 'react';
import NavBar from './components/NavBar';
import Clients from './components/Clients';
import  Actions from './components/Actions';
import  Analytics from './components/Analytics';
import logo from './logo.svg';
import './App.css';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App= inject('clientData', 'list')( observer(()=>{
  return (
    <Router>
    <div className="App">
      
      <NavBar />
      <Route path='/clients' exact render={() => <Clients/>}/>
      <Route path='/actions' exact render={() => <Actions/>}/>
      <Route path='/anaytics' exact render={() => <Analytics/>}/>
      
    </div>
    </Router>
  );
}))

export default App;
