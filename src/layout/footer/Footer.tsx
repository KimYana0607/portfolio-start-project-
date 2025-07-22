import styled from "styled-components";
import {Icon} from "../../component/icon/Icon.tsx";
import {FlexWrapper} from "../../component/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Yana</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon heigth={'33px'} width={'33px'} viewBox={'0 0 33px 33px'} iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon heigth={'33px'} width={'33px'} viewBox={'0 0 33px 33px'} iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon heigth={'33px'} width={'33px'} viewBox={'0 0 33px 33px'} iconId={'whatsapp'}/>
                        </SocialLink>
                    </SocialItem>

                </SocialList>
                <Copyright>© 2023 Yana Kim, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: gainsboro;
  min-height: 20vh;

`
const Name = styled.span`

`

const SocialList = styled.ul`
    display: flex;
  gap: 30px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`
const Copyright = styled.small`

`
