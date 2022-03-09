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
                    <FooterSocialFBLink>
                      <FooterSocialFBSvg></FooterSocialFBSvg>
                    </FooterSocialFBLink>
                    <FooterSocialIGLink>
                      <FooterSocialIGSvg></FooterSocialIGSvg>
                    </FooterSocialIGLink>
                    <FooterSocialTwitterLink>
                      <FooterSocialTwitterSvg></FooterSocialTwitterSvg>
                    </FooterSocialTwitterLink>
                    <FooterSocialPinterestLink>
                      <FooterSocialPinterestSvg></FooterSocialPinterestSvg>
                    </FooterSocialPinterestLink>
                </FooterSocialGroupWrap>
            </FooterSocialsContainer>
        </FooterContainer>
    );
};
const FooterContainer=styled.footer`
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
const FooterSocialFBLink=styled.a`
  margin-left:10px;
  margin-right:20px;
  display: inline-block;
  &:hover * {
    fill:white;
    cursor:pointer;
  }
`;
const FooterSocialFBSvg = styled(FooterSocialFB)`
`;
const FooterSocialIGLink=styled.a`
  margin-left:10px;
  margin-right:20px;
  display: inline-block;
  &:hover{
    & path{
      fill:white
    }
    cursor:pointer;
  }
`;
const FooterSocialIGSvg =styled(FooterSocialIG)`
`;
const FooterSocialTwitterLink=styled.a`
  margin-left:10px;
  margin-right:20px;
  display: inline-block;
  &:hover{
    & path{
      fill:white
    }
    cursor:pointer;
  }
`;
const FooterSocialTwitterSvg=styled(FooterSocialTwitter)`
}`;
const FooterSocialPinterestLink=styled.a`
  margin-left:10px;
  margin-right:20px;
  display: inline-block;
  &:hover{
    & path{
      fill:white
    }
    cursor:pointer;
  }
`;
const FooterSocialPinterestSvg=styled(FooterSocialPinterest)`
`;

export default Footer;
