import React, {useState} from 'react';
import TeamData from './Components/TeamData';
import TeamForm from './Components/TeamForm';

function App() {
  const [team, setTeam] = useState([
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember])
  }
  return (
    <div className="App">
     <h1 className = 'header'>My Team</h1>
     <TeamForm addNewMember={addNewMember}/>
     <TeamData team={team}/>
    </div>
  );
}

export default App;