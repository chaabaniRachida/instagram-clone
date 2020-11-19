import React from 'react';
import styled from 'styled-components'


const Picture = (props) => {
    return (
        <PicturePost src ={props.url}></PicturePost> 
    );
};

const PicturePost =styled.img`
    margin-left: 10px;
    width: 100%;
    object-fit:contain;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;

`
export default Picture;