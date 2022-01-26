import React from 'react';
import styled from 'styled-components';
import Header from './Header';
const MainSection = () =>{
    return (
        <MainSectionContainer>
            <MainSectionBackgroundImage src="/images/desktop/image-header.jpg"></MainSectionBackgroundImage>
            <Header></Header>
            <MainSectionContent className='center'>
                WE ARE CREATIVES
            </MainSectionContent>
            <DownArrowContainer className='center'>
                <DownArrow src="/images/icon-arrow-down.svg"></DownArrow>
            </DownArrowContainer>
        </MainSectionContainer>
    );
};

const MainSectionContainer = styled.div`
    position:relative;
    background-image:url(/images/desktop/image-header.jpg);
    background-position:center;
    background-size: cover;
    height:565px;
    @media (min-width: 768px){
        background-image:url(/images/desktop/image-header.jpg);
        background-position:center;
        background-size: cover;
        height:100vh;
    }
`;
const MainSectionBackgroundImage = styled.img`
    width:100%;
    position:absolute;
    top:0;
    z-index:-1;
    object-fit: cover;
`;
const MainSectionContent = styled.div`
    font-family: 'Fraunces', serif;
    text-align: center;
    font-size: 1em;
    text-transform: capitalize;
    color: white;
    padding:70px 150px 0px 150px;
    font-size:2.5em;
    margin-bottom:60px;
    letter-spacing:6px;
`;
const DownArrowContainer = styled.div`
`;
const DownArrow = styled.img`
`;

export default MainSection;