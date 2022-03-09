import React from 'react';
import styled from 'styled-components';
import ClientSection from './ClientSection'
import { clientData } from './ClientData';

const ClientTestimonials = () =>{
    return (
        <ClientTestimonialsContainer>
            <ClientTestimonialsTitleContainer>
                <ClientTestimonialsTitle>CLIENT TESTIMONIALS</ClientTestimonialsTitle>
            </ClientTestimonialsTitleContainer>
            <ClientSectionContainer>
                {clientData.map((data,i) => <ClientSection client={data} key={i}></ClientSection>)}
            </ClientSectionContainer>
        </ClientTestimonialsContainer>
    );
};
const ClientTestimonialsContainer=styled.div`
    padding:60px 35px 60px 35px;
    background-color:rgb(255,251,248);
    @media (min-width: 768px){
        padding: 10% 10% 10% 10%;
        clear:both;
    }
`;
const ClientTestimonialsTitleContainer=styled.div``;
const ClientTestimonialsTitle=styled.h1`
    font-family: 'Fraunces', serif;
    font-size:1.1em;
    font-weight:700;
    color:hsl(210, 4%, 67%);
    letter-spacing: 0.15em;
    text-align:center;
`;
const ClientSectionContainer=styled.div`
    display:flex;
    flex-direction:column;
    @media (min-width: 768px){
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
`;

export default ClientTestimonials;
