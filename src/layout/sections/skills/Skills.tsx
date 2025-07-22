import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../component/FlexWrapper.tsx";
import {SectionTitle} from "../../../component/SectionTitle.tsx";
import {Skill} from "./Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between '}>
                    <Skill iconId = {'css'}
                           title={'CSS3'}
                           description={'Lorem ipsum dolor sit amet'}/>
                    <Skill iconId = {'js'}
                           title={'JS'}
                           description={'Lorem ipsum dolor sit amet'}/>
                    <Skill iconId = {'react'}
                           title={'React'}
                           description={'Lorem ipsum dolor sit amet'}/>
                </FlexWrapper>
            
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: cadetblue;
  min-height: 100vh;
    
`