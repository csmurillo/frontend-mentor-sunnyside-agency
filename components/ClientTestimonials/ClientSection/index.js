import React from 'react';
import styled from 'styled-components';

const ClientSection = ({client}) =>{
    return (
        <ClientSectionContainer>
            <ClientSectionImageContainer className='center'>
                <ClientSectionImage src={client.image}></ClientSectionImage>
            </ClientSectionImageContainer>
            <ClientSectionContentContainer>
                <ClientSectionContent>
                    {client.content}
                </ClientSectionContent>
            </ClientSectionContentContainer>
            <ClientSectionPersonalInformationContainer className='center'>
                <ClientSectionPersonalInformationGroup>
                    <ClientSectionName>
                        {client.clientName}
                    </ClientSectionName>
                    <ClientSectionProfession>
                        {client.clientProfession}
                    </ClientSectionProfession>
                </ClientSectionPersonalInformationGroup>
            </ClientSectionPersonalInformationContainer>
        </ClientSectionContainer>
    );
};

const ClientSectionContainer=styled.div`

`;
const ClientSectionImageContainer=styled.div`
    padding-top:50px;
    padding-bottom:20px;
`;
const ClientSectionImage=styled.img`
    width:90px;
    border-radius:50%;
`;
const ClientSectionContentContainer=styled.div`
    padding:20px 0px 20px 0px;
`;
const ClientSectionContent=styled.div`
    font-family: 'Barlow', sans-serif;
    text-align:center;
    line-height:1.8em;
`;
const ClientSectionPersonalInformationContainer=styled.div`

`;
const ClientSectionPersonalInformationGroup=styled.div`
`;
const ClientSectionName=styled.div`
text-align:center;
font-family: 'Fraunces', serif;
font-weight:900;
padding:10px;
margin-bottom:5px;
`;
const ClientSectionProfession=styled.div`
text-align:center;
`;
export default ClientSection;