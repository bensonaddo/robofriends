import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class NewApp extends Component {
  render() {
    return (
      <div className='NewApp'>
        <header className='NewApp-header'>
          <img src={logo} alt='logo' className='NewApp-logo' />
          <p>
            Edit <code>src/NewApp.js</code> and save to reload.
          </p>
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default NewApp;
