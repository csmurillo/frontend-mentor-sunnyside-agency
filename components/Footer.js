import React from 'react';
import styled from 'styled-components';

const Footer = () =>{
    return (
        <FooterContainer>
            <FooterTitleContainer>sunnyside</FooterTitleContainer>
            <FooterLinkContainer className='center'>
                <FooterLink>About</FooterLink>
                <FooterLink>Services</FooterLink>
                <FooterLink>Projects</FooterLink>
            </FooterLinkContainer>
            <FooterSocialsContainer className='center'>
                <FooterSocialGroup>
                    <FooterSocialFB src='/images/icon-facebook.svg'></FooterSocialFB>
                    <FooterSocialIG src='/images/icon-instagram.svg'></FooterSocialIG>
                    <FooterSocialTwitter src='/images/icon-twitter.svg'></FooterSocialTwitter>
                    <FooterSocialPinterest src='/images/icon-pinterest.svg'></FooterSocialPinterest>
                </FooterSocialGroup>
            </FooterSocialsContainer>
        </FooterContainer>
    );
};
const FooterContainer=styled.div`
    padding:40px;
    background-color:hsl(168, 34%, 70%);
    font-family: 'Barlow', sans-serif;
`;
const FooterTitleContainer=styled.div`
    text-align:center;
    color:hsl(168,34%,28%);
    font-weight:600;
    font-size:2.5em;
`;
const FooterLinkContainer=styled.div`
    padding:50px 0px 80px 0px;
    width:100%;
`;
const FooterLink=styled.a`
    width:33.33%;
    text-align:center;
    color:hsl(168,34%,45%);
    font-size:1.2em;
`;
const FooterSocialsContainer=styled.div`
    width:100%;
`;
const FooterSocialGroup=styled.div`
`;
const FooterSocialFB=styled.img`
    padding-left:10px;
    padding-right:10px;
`;
const FooterSocialIG=styled.img`
    padding-left:10px;
    padding-right:10px;
`;
const FooterSocialTwitter=styled.img`
    padding-left:10px;
    padding-right:10px;
`;
const FooterSocialPinterest=styled.img`
    padding-left:10px;
    padding-right:10px;
`;

export default Footer;


