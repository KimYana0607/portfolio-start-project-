import {Icon} from "../../../component/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsTypes = {
    iconId: string;
    title: string
    description: string

}
export const Skill = (props:SkillPropsTypes) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 33%;
  background-color: white;
  margin: 2px;
`

const SkillTitle = styled.h3`
    
    
`

const SkillText = styled.p`
    
    
`
