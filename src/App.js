import React from 'react';
import {Header} from './components/Header';
import {Description} from './components/Description';
import {Generator} from './components/Generator/Generator';
import {Result} from './components/Result/Result';
import {Footer} from './components/Footer';
import './styles/componentsStyles/app.scss';

export const App = () => (
  <div className='app'>
    <Header/>
    <Description/>
    <Generator/>
    <Result/>
    <Footer/>
  </div>
);