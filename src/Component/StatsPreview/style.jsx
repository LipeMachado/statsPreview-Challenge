import styled from 'styled-components';
import imageBoxDesktop from '../../Images/imageBoxDesktop.jpg';

export const MainSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const BoxContainerDiv = styled.div`
    background-color: hsl(244, 38%, 16%);
    width: 58%;
    height: 45%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 55% 45%;
`;

export const ContentContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    color: hsl(0, 0%, 100%);
`;

export const ImageContainerDiv = styled.div`
    border-radius: 0 10px 10px 0;
    background-size: cover;
    background-image: url(${imageBoxDesktop});
    overflow: hidden;
`;

export const Overlay1Image = styled.div`
    background: hsl(277deg, 100%, 50%, 0.42);
    height: 100%;
`;

export const Overlay2Image = styled.div`
    background: hsl(293deg, 42%, 35%, 0.24);
    height: 100%;
    mix-blend-mode: color-burn;
`;

export const TitleAndParagraphContainerDiv = styled.div`
    font-family: 'Inter', sans-serif;
`;

export const TitleH1Div = styled.div`
    width: 20rem;
    margin-top: 60px;
`;

export const TitleH1 = styled.h1`
    font-size: 30px;
`;

export const TitleSpan = styled.span`
    color: hsl(277, 64%, 61%);
`;

export const ParagraphPDiv = styled.div`
    width: 21.875rem;
    margin-top: 20px;
`;

export const ParagraphP = styled.p`
    font-size: 15px;
    color: hsla(0, 0%, 100%, 0.75);
    line-height: 25px;
    font-weight: 400;
`;

export const StatsContainerDiv = styled.div`
    display: grid;
    margin-top: 60px;
    grid-template-columns: 33% 33% 33%;
`;

export const StatsDiv = styled.div`
    font-family: 'Inter', sans-serif;
`;

export const StatsWords = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 12px;
`;
