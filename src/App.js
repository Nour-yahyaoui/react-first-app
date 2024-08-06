
import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
