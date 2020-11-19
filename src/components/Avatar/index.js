import React from 'react';
import styled from 'styled-components'


const Avatar = (props) => {
    return (
        <AvatarImage src ={props.url}></AvatarImage> 
    );
};

const AvatarImage =styled.img`
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius:100%;
`
export default Avatar;