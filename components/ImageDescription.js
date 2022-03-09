import React from 'react';
import styled from 'styled-components';
const ImageDescription = ({imageDescriptionSectionName,title,content,imgSrcMobile,imgSrcDesktop}) =>{
    return (
        <ImageDescriptionContainer imageDescriptionSectionName={imageDescriptionSectionName} imgSrcMobile={imgSrcMobile} imgSrcDesktop={imgSrcDesktop}>
            <ImageDescriptionGroup>
                <ImageDescriptionTitle>
                    {/* Graphic Design */}
                    {title}
                </ImageDescriptionTitle>
                <ImageDescriptionContent>
                    {content}
                </ImageDescriptionContent>
            </ImageDescriptionGroup>
        </ImageDescriptionContainer>
    );
};
const ImageDescriptionContainer = styled.section`
    background-image: ${props => props.imgSrcMobile ? 'url('+props.imgSrcMobile+')' : 'none'};
    height:565px;
    background-position:center;
    background-size: cover;
    display:flex;
    align-items:flex-end;
    padding:50px 12px 25px 12px;
    color:${props => props.imageDescriptionSectionName=='graphic-design' ?  'hsl(167, 40%, 24%)' : 'hsl(198, 62%, 26%)'};
    @media (min-width: 768px){
        width:50%;
        padding:0px;
        float:left;
        background-image: ${props => props.imgSrcDesktop ? 'url('+props.imgSrcDesktop+')' : 'none'};
    }
`;
const ImageDescriptionGroup = styled.div`
    padding:50px 0px 40px 0px;
`;
const ImageDescriptionTitle = styled.h1`
    text-align:center;
    font-family: 'Fraunces', serif;
    font-weight: 900;
`;
const ImageDescriptionContent = styled.p`
    text-align:center;
    font-family: 'Barlow', sans-serif;
    font-weight: 600;
    padding:0px 5px 0px 5px;
    @media (min-width: 768px){
        padding:0px 25% 0px 25%;
    }
`;

export default ImageDescription;
