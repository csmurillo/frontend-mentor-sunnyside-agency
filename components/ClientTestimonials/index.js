import React from 'react';
import styled from 'styled-components';
import ClientSection from './ClientSection'
import { clientData } from './ClientData';

const ClientTestimonials = ({imageDescriptionSectionName,title,content,imgSrc}) =>{
    return (
        <ClientTestimonialsContainer>
            <ClientTestimonialsTitle>CLIENT TESTIMONIALS</ClientTestimonialsTitle>
            <div className='center'>
            {clientData.map((data,i) => <ClientSection client={data} key={i}></ClientSection>)}
            </div>
        </ClientTestimonialsContainer>
    );
};
const ClientTestimonialsContainer=styled.div`
    padding:80px 40px 80px 40px;
    @media (min-width: 768px){
        padding:200px;
        clear:both;
    }
`;
const ClientTestimonialsTitle=styled.h1`
    font-family: 'Fraunces', serif;
    font-size:1.2em;
    letter-spacing:2px;
    text-align:center;
    @media (min-width: 768px){
        // display:flex;
    }
`;

export default ClientTestimonials;
