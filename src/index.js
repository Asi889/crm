import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  {Provider}  from 'mobx-react'
import ClientList from "./stores/ClientList"
import Client1 from "./stores/Client1"


const list= new ClientList()
const clientData= new Client1()
const stores= {clientData, list}


ReactDOM.render(
  <Provider {...stores}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
