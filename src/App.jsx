import React from 'react';
import './App.scss';
import Text from './components/Text';
import LogoImg from './assets/images/logo.png';

function App() {
  return (
    <div className="main">
      <h1 className="main__welcome">Welcome to CocCoc Point</h1>
      <img alt="logo" className="main__logo" src={LogoImg} />
      <Text />
    </div>
  );
}

export default App;
