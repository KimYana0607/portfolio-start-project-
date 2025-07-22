import styled from "styled-components";
import {Icon} from "../../../component/icon/Icon.tsx";
import react from "@vitejs/plugin-react";
import {Slider} from "../../../component/slider/Slider.tsx";
import {SectionTitle} from "../../../component/SectionTitle.tsx";
import {FlexWrapper} from "../../../component/FlexWrapper.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <Icon iconId = {'react'}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  background-color: cornflowerblue;
  min-height: 50px;

`