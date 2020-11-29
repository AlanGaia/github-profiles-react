import React, { Fragment } from 'react';
import Header from './components/header/Header';
import ProfileDescription from './components/Profile/ProfileDescription';
import Search from './components/search/Search';

function App() {

  // const username = 'AlanGaia'

  return (
    <Fragment>
      <Header />
      <Search />
      <ProfileDescription />
    </Fragment>
  );
}

export default App;
