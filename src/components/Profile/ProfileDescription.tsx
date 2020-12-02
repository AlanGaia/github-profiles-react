import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { Profile, ProfileProps } from './Profile';
import * as ProfileServices from './ProfileServices';



const ProfileDescription: React.FC<ProfileProps> = ({ username }) => {





  const initialState = {
    bio: '',
    avatar_url: '',
    name: '',
    repos_url: '',
    followers: 0,
    following: 0,
    public_repos: 0,
    repos: [],
  }


  const [user, setUser] = useState<Profile>(initialState)

  const getUser = async (username: string) => {
    const res = await ProfileServices.getUser(username);
    const {bio, avatar_url, name, repos_url, followers, following, public_repos} = res.data;
    const repos = await (await ProfileServices.getRepos(repos_url)).data;
        
    setUser({bio, avatar_url, name, repos_url, followers, following, public_repos, repos});

    return;
  }

  useEffect(() => {
    getUser(username);
  }, [username]);


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

  const Bio = styled.p`
    text-align: center;
    font-size: 1.4rem;
    border-radius: 8px;
    padding: .5rem;
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

  const UnorderedList = styled.ul`
    list-style: none;
  `;

  const ListItem = styled.li`
  display: inline-block;
  margin: 10px;
  background: #3c8a938a;
  padding: 10px;
  border-radius: 10px;

    :hover {
    background: #008cff;
    cursor: pointer;
    }
  `;

  const LinkToRepo = styled.a`
    text-decoration:none;
    color: inherit;
  `;

  return (
    <ContainerProfile>
      <ContainerRow>
      <Subtitles>About</Subtitles>
      <HalfContainer>
        <Avatar src={user.avatar_url} />
      <ContainerRow>
      <Name>{user.name}</Name>
      <Bio>{user.bio}</Bio>
        <UnorderedList>
          <ListItem>Followers: <b>{user.followers}</b></ListItem>
          <ListItem>Following: <b>{user.following}</b></ListItem>
          <ListItem>Repositories: <b>{user.public_repos}</b></ListItem>
        </UnorderedList>
      </ContainerRow>

      </HalfContainer>
      <Subtitles>My repos</Subtitles>
      <HalfContainer>
        <UnorderedList>
        {
          user.repos.map( repo => {
          return <ListItem  >
                  <LinkToRepo target="_blank" href={repo.html_url}>
                    {repo.name}
                  </LinkToRepo>
                </ListItem>
          })
        }
        </UnorderedList>
      </HalfContainer>
      </ContainerRow>
      
      
    </ContainerProfile>
  )
}

export default ProfileDescription
