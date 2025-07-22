import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../component/SectionTitle.tsx";
import {Button} from "../../../component/Button.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I am available for Freelance</SectionTitle>
            <Button>HERE ME</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: coral;
`