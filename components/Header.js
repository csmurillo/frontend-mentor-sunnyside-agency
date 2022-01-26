import React from 'react';
import styled from 'styled-components';
const Header = () =>{
    return (
        <HeaderContainer className="spacebetween">
            <LogoContainer>
                <Logo src="/images/logo.svg"></Logo>
            </LogoContainer>
            <HamburgerIconContainer>
                <HamburgerIcon src="/images/icon-hamburger.svg"></HamburgerIcon>
            </HamburgerIconContainer>
            <DesktopLinksContainer>
                <DesktopLinkGroup>
                    <Links className='center'>About</Links>
                    <Links className='center'>Services</Links>
                    <Links className='center'>Projects</Links>
                    <ContactButton>CONTACT</ContactButton>
                </DesktopLinkGroup>
            </DesktopLinksContainer>
        </HeaderContainer>
    );
};
const HeaderContainer = styled.div`
    width:100%;
`;
const LogoContainer = styled.div`
    padding:30px 0px 0px 60px;
    display:flex;
    margin:0px;
    @media (max-width: 768px){
        padding:40px 0px 0px 30px;
    }
`;
const Logo = styled.img`
    height:40px;
    @media (max-width: 768px){
        height:24px;
    }
`;
const HamburgerIconContainer = styled.div`
    padding:40px 30px 0px 0px;
`;
const HamburgerIcon = styled.img`
    width:32px; height:24px;
    @media (min-width: 768px){
        display:none;
    }
`;
const DesktopLinksContainer = styled.div`
    padding:30px 60px 0px 0px;
    @media (max-width: 768px){
        display:none!important;
    }
`;
const DesktopLinkGroup = styled.div`
    display:flex;
`;
const Links = styled.div`
    color:white;
    padding:20px;
    margin-right:50px !important;
    &:hover {
        cursor:pointer;
    }
`;
const ContactButton = styled.button`
    font-family: 'Fraunces', serif;
    padding:20px;
    background-color:white;
    border-radius:35%/60%;
    border:none;
`;
export default Header;