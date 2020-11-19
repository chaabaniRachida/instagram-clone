import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const Deconnexion = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Container>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>Deconnexion</LogoutButton>
      ): null }
    </Container>
  )
}

const LogoutButton = styled.button`
    float: right;
    border-radius: 10px;
    width:150px;
    line-height:50px;
    text-align:center;
    background:black;
    color:white;
    text-decoration:none;
    font-family: 'Goldman', cursive;
`

const Container = styled.div`
  background-color: grayDark;
  

  
`

export default Deconnexion