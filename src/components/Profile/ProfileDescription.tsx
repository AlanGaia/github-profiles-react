import React, {useState} from 'react'
import styled from 'styled-components';
import { Profile } from './Profile';
import * as ProfileServices from './ProfileServices';

function ProfileDescription({ }) {



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




  const ContainerProfile = styled.div`
    padding: 1rem;
    background-color: #00423d;
    margin: 1rem;
    display: flex;
    flex-direction:column;
    max-width: 800px;
    flex-wrap: wrap;
    margin: 1rem auto;
  `;

  const ContainerRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const Name = styled.h2`
    color: #ffffff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  `;

  const HalfContainer = styled.div`
    max-width: 50%;
    background-color: #1d615b;
    margin: 1rem;
    padding: 1rem;

  `;


  const Avatar = styled.img`
    vertical-align: middle;
    width: 200px;
    border-radius: 50%;
  `;


  return (
    <ContainerProfile>
      <Name>{user.name}</Name>
      <ContainerRow>
      <HalfContainer>
        <Avatar src={user.avatar_url} />
        <p>{user.bio}</p>
      </HalfContainer>
      <HalfContainer>
        <p>{user.repos_url}</p>
      </HalfContainer>
      </ContainerRow>
      
      <button onClick={() => getUser('AlanGaia')
      }>Get the user</button>
      
    </ContainerProfile>
  )
}

export default ProfileDescription
