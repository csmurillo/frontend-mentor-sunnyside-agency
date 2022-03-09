import React from 'react';
import styled from 'styled-components';

const Images = () =>{
    return (
        <ImagesContainer>
            <ImageGalleryContainer1>
                <ImageGallery src="/images/mobile/image-gallery-milkbottles.jpg"></ImageGallery>
            </ImageGalleryContainer1>
            <ImageGalleryContainer2>
                <ImageGallery src="/images/mobile/image-gallery-orange.jpg"></ImageGallery>
            </ImageGalleryContainer2>
            <ImageGalleryContainer3>
                <ImageGallery src="/images/mobile/image-gallery-cone.jpg"></ImageGallery>
            </ImageGalleryContainer3>
            <ImageGalleryContainer4>
                <ImageGallery src="/images/mobile/image-gallery-sugar-cubes.jpg"></ImageGallery>
            </ImageGalleryContainer4>
        </ImagesContainer>
    );
};

const ImagesContainer=styled.section`
    display: grid;
    grid-template-columns: 50% 50% 50% 50%;
    grid-template-rows: auto;
    grid-template-areas: 
    "image-1 image-2"
    "image-3 image-4";
    font-size: 0;
    margin: 0;
    padding: 0;
    border: 0;
    @media (min-width: 768px){
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-areas: 
    "image-1 image-2 image-3 image-4";
    }
`;
const ImageGalleryContainer1 = styled.div`
    grid-area:image-1;
`;
const ImageGalleryContainer2 = styled.div`
    grid-area:image-2;
`;
const ImageGalleryContainer3 = styled.div`
    grid-area:image-3;
`;
const ImageGalleryContainer4 = styled.div`
    grid-area:image-4;
`;
const ImageGallery=styled.img`
    width:100%;
`;
export default Images;