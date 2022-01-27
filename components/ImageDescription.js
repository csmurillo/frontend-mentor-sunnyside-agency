import React from 'react';
import styled from 'styled-components';
const ImageDescription = ({imageDescriptionSectionName,title,content,imgSrcMobile,imgSrcDesktop}) =>{
    return (
        <ImageDescriptionContainer imageDescriptionSectionName={imageDescriptionSectionName} imgSrcMobile={imgSrcMobile} imgSrcDesktop={imgSrcDesktop}>
            {/* <ImageDescriptionImg src="/images/mobile/image-graphic-design.jpg"></ImageDescriptionImg> */}
            <ImageDescriptionGroup>
                <ImageDescriptionTitle>
                    {/* Graphic Design */}
                    {title}
                </ImageDescriptionTitle>
                <ImageDescriptionContent>
                    {content}
                    {/* Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention. */}
                </ImageDescriptionContent>
            </ImageDescriptionGroup>
        </ImageDescriptionContainer>
    );
};
const ImageDescriptionContainer = styled.div`
// background-image:url(/images/mobile/image-graphic-design.jpg);
background-image: ${props => props.imgSrcMobile ? 'url('+props.imgSrcMobile+')' : 'none'};
height:565px;
background-position:center;
background-size: cover;
display:flex;
align-items:flex-end;
padding:50px 12px 25px 12px;
color:${props => props.imageDescriptionSectionName=='graphic-design' ?  'hsl(167, 40%, 24%)' : 'hsl(198, 62%, 26%)'};
// color:hsl(198, 62%, 26%);
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
// color:hsl(198, 62%, 26%);
`;
const ImageDescriptionContent = styled.div`
text-align:center;
font-family: 'Barlow', sans-serif;
font-weight: 600;
// color:hsl(198, 62%, 26%);
padding:0px 5px 0px 5px;
@media (min-width: 768px){
    padding:0px 25% 0px 25%;
}
`;

// const ImageDescriptionImg=styled.img`
// width:100%;
// `;

export default ImageDescription;
