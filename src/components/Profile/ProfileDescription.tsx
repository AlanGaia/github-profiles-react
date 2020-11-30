import React, {useState} from 'react'
import styled from 'styled-components';
import { Profile } from './Profile';
import * as ProfileServices from './ProfileServices';

function ProfileDescription({ }) {


  let username = 'AlanGaia';



  const initialState = {
    bio: '',
    avatar_url: '',
    name: '',
    repos_url: '',
  }


  const [user, setUser] = useState<Profile>(initialState)

  const getUser = async (username: string) => {
    const res = await ProfileServices.getUser(username);
    const {bio, avatar_url, name, repos_url} = res.data;
    setUser({bio, avatar_url, name, repos_url});
    return;
  }



  const Subtitles = styled.h3`
    color: #ffffff;
    text-align: left;
    font-size: 1.5rem;
    margin-left: 1rem;
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

  const ContainerRow = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
  `;

  const Name = styled.h2`
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
  `;

  const HalfContainer = styled.div`
    background-color: #394f97;
    margin: 1rem;
    margin-top: 0px;
    padding: 1rem;
    color: #ffffff;
    align-items: center;
    justify-content: space-between;
    display:flex;
    flex-direction: row;
  `;
  



  const Avatar = styled.img`
    vertical-align: middle;
    width: 150px;
    border-radius: 50%;
  `;


  return (
    <ContainerProfile>
      <Name>{user.name}</Name>
      <ContainerRow>
      <Subtitles>About</Subtitles>
      <HalfContainer>
        <Avatar src={user.avatar_url} />
        <p>{user.bio}</p>
      </HalfContainer>
      <Subtitles>My repos</Subtitles>
      <HalfContainer>
        {
          (user.repos_url) ?
          <button>Get the repos</button> :
          null
        }
        <p>{user.repos_url}</p>
      </HalfContainer>
      </ContainerRow>

      <input type="text" value={username}/>
      
      <button onClick={() => getUser('AlanGaia')
      }>Get the user</button>
      
    </ContainerProfile>
  )
}

export default ProfileDescription
