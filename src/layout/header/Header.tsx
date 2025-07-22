import React from 'react';
import styled from "styled-components";
import {Logo} from "../../component/logo/Logo.tsx";
import {Menu} from "../../component/menu/Menu.tsx";


const items = ['Home', 'Skills', 'Works', 'Testimony',  'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: #2157F2;
display: flex;
justify-content: space-between; 
`