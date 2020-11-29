import React from 'react'
import styled from 'styled-components';

function Profile({data}) {

  const { username } = data; 


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
      <Name>{username}</Name>
      <ContainerRow>
      <HalfContainer>
        <Avatar />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, incidunt earum! Ullam sed quisquam consequuntur id maxime enim saepe, earum labore eaque non modi, reiciendis animi, accusantium iure velit! Accusamus.</p>
      </HalfContainer>
      <HalfContainer>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis deserunt deleniti alias commodi accusamus laudantium dicta hic placeat velit numquam ex facilis aspernatur, sequi, nostrum delectus! Ab neque quasi velit!</p>
      </HalfContainer>
      </ContainerRow>
      
    </ContainerProfile>
  )
}

export default Profile
