import React,{useState} from 'react'
import styled from 'styled-components'
//import Username from '../Username'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import logo from '../../assets/logo.png'

const Connexion = props => {
  const history = useHistory()
  const [formState, setFormState]= useState({username:'', password:''})
  //const [errorMessage, setErrorMessage] =useState('')
  
  console.log(history)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
        method:'POST',
        url: 'https://easy-login-api.herokuapp.com/users/login',
        data:{
            username: formState.username,
            password: formState.password
        }
    })
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.headers['x-access-token'])
        history.push('/post')
    })
  }

  return (
    
    <StyledForm>
    <img src={logo} className="App-logo" alt="logo" />
      <FormSpan type='text'></FormSpan >
      <FormInput placeholder='Username' onChange={e => setFormState({...formState, username:e.target.value})} type='text'></FormInput>
      <FormInput placeholder='Password' onChange={e => setFormState({...formState, password:e.target.value})} type='password'></FormInput>
      <Button onClick={ e=> handleSubmit(e) }>Connexion</Button>
    </StyledForm>
  )
}

export default Connexion;

const FormSpan =styled.span`
  color: green;
  margin-bottom: 10px;
  `
const StyledForm =styled.form`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 500px;
  border: 1px solid lightgray;
  margin-left: auto;
  margin-right: auto;
  `
const FormInput = styled.input`
  margin: 20px;
  border-radius: 8px;
  
  background-color: lightgray;
  height: 40px;
  color:white;
  padding: 0px 6px;
  `
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: lightgray;
`;