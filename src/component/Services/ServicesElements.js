import styled from "styled-components";


export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;


@media screen and (max-width: 768px) {
    height: 1500px;
    
}

@media screen and (max-width: 480px) {
    height: 1800px;
}
`;

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 300px;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 1px;
    display: grid;
    align-items: center;
    margin-bottom: 150px;
}
`;

export const ServicesCard = styled.div`
background: #fff;
height: 300px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
padding: 16px;
box-shodow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    height: 350px;
    width: 300px;
}

@media screen and (max-width: 700px) {
    height: 350px;
    width: 250px;
}

@media screen and (max-width: 700px) {
    height: 350px;
    width: 220px;
}

@media screen and (max-width: 480px) {
    height: 370px;
    width: 190px;
}

@media screen and (max-width: 400px) {
    height: 420px;
    width: 170px;
}


@media screen and (max-width: 360px) {
    height: 420px;
    width: 157px;
}

@media screen and (max-width: 320px) {
    height: 420px;
    width: 150px;
}
`;

export const ServicesIcon = styled.img`
height: 160px;
width: 250px;
margin-bottom: 10px;

@media screen and (max-width: 768px) {
    height: 160px;
    width: 290px;
}

@media screen and (max-width: 760px) {
    height: 160px;
    width: 169px;
}

@media screen and (max-width: 375px) {
    height: 160px;
    width: 155px;
} 

@media screen and (max-width: 320px) {
    height: 160px;
    width: 145px;
} 
`;


export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`;

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 20px;
`;


export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;

@media screen and (max-width: 700px) {
    font-size: 15px;
    margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
    margin-bottom: 20px;
}
`;
