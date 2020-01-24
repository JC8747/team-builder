import React from 'react';
import styled from 'styled-components';

const TeamCard = styled.div`
width: 300px;
height: 300px;
background: green;
color: black;
border-radius: 10px;
display:flex;
flex-direction: column;
align-items: center;
justify-content:center;
border: 4px dashed black;
margin: 20px;
`;
const TeamList = styled.div`
display: flex;
flex direction: row;
flex-wrap: wrap;
justify-content: center;
width: 100%;
height:auto;
background: black;
`;

const TeamData = props => {
    return (
        <TeamList className='member-list'>
            {props.team.map(member => (
              <TeamCard className='member' key={member.id}>
                  <h2>{member.name}</h2>
                  <p>{member.email}</p>
                  <p>{member.role}</p>
              </TeamCard>
            ))}
        </TeamList>
    )
};

export default TeamData;