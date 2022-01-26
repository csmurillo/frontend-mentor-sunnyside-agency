import React from 'react';
import styled from 'styled-components';
import ClientSection from './ClientSection'
import { clientData } from './ClientData';

const ClientTestimonials = ({imageDescriptionSectionName,title,content,imgSrc}) =>{
    return (
        <ClientTestimonialsContainer>
            <ClientTestimonialsTitle>CLIENT TESTIMONIALS</ClientTestimonialsTitle>
            {clientData.map((data,i) => <ClientSection client={data} key={i}></ClientSection>)}
        </ClientTestimonialsContainer>
    );
};
const ClientTestimonialsContainer=styled.div`
    padding:80px 40px 80px 40px;
`;
const ClientTestimonialsTitle=styled.h1`
    font-family: 'Fraunces', serif;
    font-size:1.2em;
    letter-spacing:2px;
    text-align:center;
`;

export default ClientTestimonials;
