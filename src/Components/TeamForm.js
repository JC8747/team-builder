import React, {useState} from 'react';
import styled from 'styled-components';

const TeamInfo = styled.form`
display:flex;
flex-direction:column;
width: 300px;
justify-content:center;
align-items: center;
padding: 20px;
`;

const FormContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
background: black;
color: green;
`;

const TeamForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''})

    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value})
    };

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
        setMember({name: '', email: '', role: ''})
    }
    return(
        <FormContainer>
            <TeamInfo className = 'member-form' onSubmit={submitForm}>
                <label htmlFor='name'>Name: </label>
                <input id='name' type='text' name='name' value={member.name} onChange={handleChanges}/>
                <label htmlFor='email'>Email: </label>
                <input id='email' type='email' name='email' value={member.email} onChange={handleChanges}/>
                <label htmlFor='role'>Role: </label>
                <select id='role' name='role' value={member.role} onChange={handleChanges}>
                    <option value='reset'>-- Please choose a role --</option>
                    <option value='Cat Wrangler'>Cat Wrangler</option>
                    <option value='Feline Operations'>Feline Operations</option>
                    <option value='Kitty Whisperer'>Kitty Whisperer</option>
                    <option value='Kitten Trainer'>Kitten Trainer</option>
                </select>
                <button type='submit'>Add Member</button>
            </TeamInfo>
        </FormContainer>
    )
}

export default TeamForm;