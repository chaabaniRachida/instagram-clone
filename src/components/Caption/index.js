import React from 'react';
import styled from 'styled-components'




const Caption = (props) => {
    return (
        <CaptionText>
             <h3><strong>{props.nom}</strong></h3> 
             <p> {props.caption} what a wonderful nature</p>
             
        </CaptionText>
    );
};

const CaptionText =styled.div`
    margin-left: 10px;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px; 
    max-width: 700px;
    
    

`
export default Caption;