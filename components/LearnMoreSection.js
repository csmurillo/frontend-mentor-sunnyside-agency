import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const LearnMoreSection = ({id,title,content,imgSrcMobile,imgSrcDesktop}) =>{

    const [screenSize,setScreenSize] = useState(null);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            // console.log(window.innerWidth);
            setScreenSize(window.innerWidth);
        });
    },[]);

    return (
        <LearnMoreSectionContainer sectionId={id}>
            <LearnMoreImage src={ screenSize > 768 ? imgSrcDesktop : imgSrcMobile}>
            </LearnMoreImage>
            <LearnMore className={screenSize > 768 ? 'center':'center'}>
                <div>
                    <LearnMoreHeader>{title}</LearnMoreHeader>
                    <LearnMoreContent>
                        {content}
                    </LearnMoreContent>
                    <LearnMoreLink className={screenSize > 768 ? 'center':''}>LEARN MORE</LearnMoreLink>
                </div>
            </LearnMore>
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
        // grid-template-areas: "LearnMoreImage LearnMore";
    }
`;
const LearnMoreImage = styled.img`
    width:100%;
    grid-area:LearnMoreImage;
`;
const LearnMore = styled.div`
    padding:50px 25px 60px 25px;
    grid-area:LearnMore;
    font-family: 'Fraunces', serif;
    @media (min-width: 768px){
        padding:150px;
        background-color:white;
    }
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
margin-bottom:30px;
color: hsl(210, 4%, 67%);
@media (min-width: 768px){
    text-align:start;
}
`;
const LearnMoreLink = styled.a`
font-weight:900;
`;
export default LearnMoreSection;