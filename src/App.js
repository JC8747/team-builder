import React, {useState} from 'react';
import Members from './Components/Members';
import MemberForm from './Components/MemberForm';

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
     <MemberForm addNewMember={addNewMember}/>
     <Members team={team}/>
    </div>
  );
}

export default App;