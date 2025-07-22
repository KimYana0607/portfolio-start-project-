import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.png'
import {FlexWrapper} from "../../../component/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around '}>
                <div>
                    <span>Hello</span>
                    <Name>I am Yana Kim</Name>
                    <MainTittle>A Web Developer</MainTittle>
                </div>
                <Photo src= {photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  height: 100vh;
  background-color: #A6BCFA;
`
const Photo = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
`
const MainTittle = styled.h1`
    
`

const Name = styled.h2`
    
`