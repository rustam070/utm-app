import React from 'react';
import {Header} from './components/Header';
import {Description} from './components/Description';
import {UtmGenerator} from './components/UtmGenerator';
import {UtmResult} from './components/UtmResult';
import {Footer} from './components/Footer';
import './styles/componentsStyles/app.scss';

export const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Description/>
      <UtmGenerator/>
      <UtmResult/>
      <Footer/>
    </div>
  );
};