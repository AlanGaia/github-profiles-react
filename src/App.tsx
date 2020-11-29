import React, { Fragment } from 'react';
import Header from './components/header/Header';
import Profile from './components/Profile/Profile';
import Search from './components/search/Search';

function App() {

  const data = {
    username: 'Alan Gaia'
  }

  return (
    <Fragment>
      <Header />
      <Search />
      <Profile data={data} />
    </Fragment>
  );
}

export default App;
