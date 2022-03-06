import React,{useState} from 'react';
import styled from 'styled-components';
const Header = () =>{

    const [menuActive, setMenuActive]= useState(false);

    const menuClick = ()=>{
        setMenuActive(!menuActive);
    };

    return (
        <HeaderContainer>
            <LogoContainer className='center'>
                <Logo src="/images/logo.svg"></Logo>
            </LogoContainer>
            <HamburgerContainer className='center'>
                <HamburgerIcon src="/images/icon-hamburger.svg" onClick={menuClick}></HamburgerIcon>
            </HamburgerContainer>
            <DesktopNavLinks>
                <DesktopLinks className='center'><p>About</p></DesktopLinks>
                <DesktopLinks className='center'><p>Services</p></DesktopLinks>
                <DesktopLinks className='center'><p>Projects</p></DesktopLinks>
                <DesktopLinks>
                    <ContactButton>CONTACT</ContactButton>
                </DesktopLinks>
            </DesktopNavLinks>
            {menuActive &&
                <MobileNavLinksContainer className='center'>
                    <MobileNavLinks>
                        <MobileNavLinksTriangle></MobileNavLinksTriangle>
                        <MobileNavBackground>
                            <MobileLinks className='center'><p>About</p></MobileLinks>
                            <MobileLinks className='center'><p>Services</p></MobileLinks>
                            <MobileLinks className='center pad-bottom-1'><p>Projects</p></MobileLinks>
                            <MobileLinks className='center'>
                                <ContactButton color={'hsl(51, 100%, 49%)'}>CONTACT</ContactButton>
                            </MobileLinks>
                        </MobileNavBackground>
                    </MobileNavLinks>
                </MobileNavLinksContainer>
            }
        </HeaderContainer>
    );
}
const HeaderContainer = styled.header`
    padding:40px 30px 0px 30px;
    position:relative;
    display:flex;
    justify-content:space-between;
`;
const LogoContainer= styled.div`

`;
const Logo = styled.img`

`;
const HamburgerContainer=styled.div`
    @media (min-width: 768px){
        display:none!important;
    }
`
const HamburgerIcon=styled.img`
    &:hover{
        cursor:pointer;
    }
`;
const DesktopNavLinks= styled.nav`
    display:flex;
    @media (max-width: 768px){
        display:none!important;
    }
`;
const DesktopLinks=styled.div`
    padding:0px 20px 0px 20px;
    color:white;
    & p {
        margin:0;
        padding:0;
        &:hover{
            cursor:pointer;
        }
    }
`;
const ContactButton=styled.button`
    background-color:${props=>props.color};
    font-family: 'Fraunces',serif;
    color: black;
    border-radius: 40%/100%;
    border: none;
    padding: 18px 30px;
    &:hover{
        cursor:pointer;
    }
`;
const MobileNavLinksContainer=styled.div`
    position:absolute;
    left:0; bottom:0;
    top:190%;
    width:100%;
    height:100px;
    @media (min-width: 768px){
        display:none!important;
    }
`;
const MobileNavLinksTriangle = styled.div`
    position: absolute;
    top:-30%;
    right: 30px;
    width: 0; 
    height: 0; 
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent; 
    border-right:30px solid white; 
`;
const MobileNavLinks=styled.div`
    position:relative;
    width:100%; 
    height:100%;
    padding: 0px 30px 0px 30px;
`;
const MobileNavBackground =styled.div`
    background-color:white;
    padding:30px;
`;
const MobileLinks=styled.div`
    background-color:white;
    padding: 20px 0px 20px 0px;
    & p {
        color:hsl(167, 40%, 24%);
        font-weight:600;
        color:hsl(167, 40%, 24%);
        padding: 0;
        margin: 0;
        &:hover{
            cursor:pointer;
        }
    }
`;

export default Header;