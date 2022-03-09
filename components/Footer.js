import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../public/images/logo.svg';
import {ReactComponent as FooterSocialFB} from '../public/images/icon-facebook.svg';
import {ReactComponent as FooterSocialIG} from '../public/images/icon-instagram.svg';
import {ReactComponent as FooterSocialTwitter} from '../public/images/icon-twitter.svg';
import {ReactComponent as FooterSocialPinterest} from '../public/images/icon-pinterest.svg';

const Footer = () =>{
    return (
        <FooterContainer>
            <FooterTitleContainer className='center'>
              <LogoSvg></LogoSvg>
            </FooterTitleContainer>
            <FooterLinkContainer className='center'>
                  <FooterLinkWrap>
                    <FooterLink>About</FooterLink>
                    <FooterLink>Services</FooterLink>
                    <FooterLink>Projects</FooterLink>
                  </FooterLinkWrap>
            </FooterLinkContainer>
            <FooterSocialsContainer className='center'>
                <FooterSocialGroupWrap>
                    <FooterSocialFBContainer>
                      <FooterSocialFBSvg></FooterSocialFBSvg>
                    </FooterSocialFBContainer>
                    <FooterSocialIGContainer>
                      <FooterSocialIGSvg></FooterSocialIGSvg>
                    </FooterSocialIGContainer>
                    <FooterSocialTwitterContainer>
                      <FooterSocialTwitterSvg></FooterSocialTwitterSvg>
                    </FooterSocialTwitterContainer>
                    <FooterSocialPinterestContainer>
                      <FooterSocialPinterestSvg></FooterSocialPinterestSvg>
                    </FooterSocialPinterestContainer>
                </FooterSocialGroupWrap>
            </FooterSocialsContainer>
        </FooterContainer>
    );
};
const FooterContainer=styled.div`
  padding:80px 40px 80px 40px;
  background-color:hsl(168, 34%, 70%);
  font-family: 'Barlow', sans-serif;
`;
const FooterTitleContainer=styled.div`
`;
const LogoSvg =styled(Logo)`
  transform: scale(1.5);
  & path{
    fill:rgb(44, 117, 102);
  }
`;
const FooterLinkContainer=styled.div`
    padding:50px 0px 80px 0px;
    width:100%;
`;
const FooterLinkWrap= styled.div`
  display:inline-block;
`;
const FooterLink=styled.a`
    text-align:center;
    color:hsl(168,34%,45%);
    font-size:1.2em;
    margin-left:30px;
    margin-right:30px;
    @media (min-width: 768px){
        width:10%;
    }
    &:hover{
        color:white;
        cursor:pointer;
    }
`;
const FooterSocialsContainer=styled.div`
    width:100%;
`;
const FooterSocialGroupWrap=styled.div`
`;
const FooterSocialFBContainer=styled.div`
  margin-left:10px;
  margin-right:20px;
  display: inline-block;
`;
const FooterSocialFBSvg = styled(FooterSocialFB)`
  & path{
    &:hover{
      fill:white;
        cursor:pointer;
    }
  }
`;
const FooterSocialIGContainer=styled.div`
  margin-left:10px;
  margin-right:20px;
  display: inline-block;
`;
const FooterSocialIGSvg =styled(FooterSocialIG)`
& path{
  &:hover{
    fill:white;
      cursor:pointer;
  }
}
`;
const FooterSocialTwitterContainer=styled.div`
  margin-left:10px;
  margin-right:20px;
  display: inline-block;
`;
const FooterSocialTwitterSvg=styled(FooterSocialTwitter)`
& path{
  &:hover{
    fill:white;
      cursor:pointer;
  }
}`;
const FooterSocialPinterestContainer=styled.div`
  margin-left:10px;
  margin-right:20px;
  display: inline-block;
`;
const FooterSocialPinterestSvg=styled(FooterSocialPinterest)`
& path{
  &:hover{
    fill:white;
      cursor:pointer;
  }
}`;

export default Footer;
