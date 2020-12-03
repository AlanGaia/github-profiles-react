import React, { Fragment, useState } from 'react';
import Header from './components/header/Header';
import ProfileDescription from './components/Profile/ProfileDescription';
import styled from 'styled-components'
import Search from './components/search/Search';

function App() {


  const Subtitles = styled.h3`
  color: #ffffff;
  text-align: left;
  font-size: 2.5rem;
  margin-left: 1rem;
  text-align: center;
`;

const ContainerProfile = styled.div`
  padding: 1rem;
  background-color: #22305e;
  margin: 1rem;
  display: flex;
  flex-direction:column;
  max-width: 800px;
  flex-wrap: wrap;
  margin: 1rem auto;
`;


  const [username, setUsername] = useState('');


  return (
    <Fragment>
      <Header />
      {
        username === '' ?
        <ContainerProfile>
          <Subtitles>Search a user from Github</Subtitles>
          <Search setUsername={setUsername} />
        </ContainerProfile>
        :
        <ContainerProfile>
          <Subtitles>Search another user from Github</Subtitles>
          <Search setUsername={setUsername} />
          <ProfileDescription  username={username} />
        </ContainerProfile>
        
      }
    </Fragment>
  );
}


export default App;
