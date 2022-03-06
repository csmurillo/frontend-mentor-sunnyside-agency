import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const LearnMoreSection = ({id,title,content,imgSrcMobile,imgSrcDesktop, linkUnderlineColor}) =>{

    const [screenSize,setScreenSize] = useState(null);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            // console.log(window.innerWidth);
            setScreenSize(window.innerWidth);
        });
    },[]);

    return (
        <LearnMoreSectionContainer sectionId={id}>
            <LearnMoreImageContainer>
                <LearnMoreImage src={ screenSize > 768 ? imgSrcDesktop : imgSrcMobile}>
                </LearnMoreImage>
            </LearnMoreImageContainer>
            <LearnMoreContainer>
                <LearnMore>
                    <LearnMoreHeader>{title}</LearnMoreHeader>
                    <LearnMoreContent>
                        <p>{content}</p>
                    </LearnMoreContent>
                    <LearnMoreLink underlineColor={linkUnderlineColor}><span>LEARN MORE</span></LearnMoreLink>
                </LearnMore>
            </LearnMoreContainer>
        </LearnMoreSectionContainer>
    );
};
const LearnMoreSectionContainer = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas: 
    "LearnMoreImage"
    "LearnMore";
    @media (min-width: 768px){
        grid-template-columns: 50%;
        grid-template-areas:${props => props.sectionId == 1 ? `'LearnMore LearnMoreImage'` : `'LearnMoreImage LearnMore'`};
    }
`;
const LearnMoreImageContainer = styled.div`
`;
const LearnMoreImage = styled.img`
    width:100%; height:100%;
    grid-area:LearnMoreImage;
`;
const LearnMoreContainer = styled.div`
    padding:50px 25px 60px 25px;
    grid-area:LearnMore;
    @media (min-width: 768px){
        padding:19%;
        background-color:white;
    }
`;
const LearnMore = styled.div`
    font-family: 'Fraunces', serif;
    width:100%;
`;
const LearnMoreHeader = styled.h1`
text-align:center;
font-weight:900;
@media (min-width: 768px){
    text-align:start;
    padding-right:120px;
}
`;
const LearnMoreContent = styled.div`
font-family: 'Barlow', sans-serif;
text-align:center;
font-size:1.05em;
font-weight:600;
line-height: 1.8em;
margin-bottom:30px;
color: hsl(210, 4%, 67%);
@media (min-width: 768px){
    text-align:start;
}
`;
const LearnMoreLink = styled.a`
width:100%;
font-weight:900;
display:flex;
justify-content:center;
@media (min-width: 768px){
    display:flex;
    justify-content:flex-start;
}
& span{
    display:inline-block;
    &::after{
        content: '';
        height: 8px;
        background:${props=>props.underlineColor};
        border-radius: 5px;
        display: block;
        margin-top: -7px;
        width: 110%;
        margin-left: -5%;
    }
}
`;
export default LearnMoreSection;