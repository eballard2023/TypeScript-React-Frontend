import React from 'react';
import logo from './logo.svg';
import './App.css';
import happy from './happyelijah.png';

//importing redux store and provider
import { store } from './app/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <div>
      <a href="about.html" target="_blank" rel="noreferrer">
        <img src={happy} alt="example" />
        </a>
     <br/>
     <br/>
     
     
    </div>
  );
}