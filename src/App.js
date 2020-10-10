import React from 'react';
import './App.css';
import Body from "./components/body";
import Footer from './components/footer';
import Header from './components/head';
import Jumbotron from './components/jumbotron';
import Main from './components/main';
import Album from './components/album';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);


function App() {
  return (
    <div className="App">
      <Body>
        <Header/>
        <Main>
        <Jumbotron/>
        <Album/>
        </Main>
        <Footer/>
      </Body>
    </div>
  );
}

export default App;
