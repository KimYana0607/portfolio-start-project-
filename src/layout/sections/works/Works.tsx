import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../component/SectionTitle.tsx";
import {Menu} from "../../../component/menu/Menu.tsx";
import {Work} from "./work/Work.tsx";
import {FlexWrapper} from "../../../component/FlexWrapper.tsx";
import socialImg from './../../../assets/images/photo.png'
import TimerImg from './../../../assets/images/photo.png'


const worksItems = ['All', 'Landing page', 'React', 'Spa']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title = {'Social network'}  src = {socialImg} text={'Lorem ipsum'}/>
                <Work title = {'Timer'}
                      src={TimerImg}
                      text={'Lorem ipsum'}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: darkcyan;
`