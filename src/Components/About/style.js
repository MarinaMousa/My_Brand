import { styled } from "styled-components";

export const AboutSection = styled.div `
    background: url('../images/in.jpg');
    height: auto;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding-top: 100px;
    padding-bottom: 100px;
`

export const Container = styled.div `
    display: flex;
    justify-content: right;
    align-items: center;
    text-align: left;
`

export const AboutInfo = styled.div `
    
    margin-right: 100px;
    width: 50%;

    @media (max-width: 767px) {
        width: 60%;
        margin: auto;
        padding-top: 50px;
    }

`

export const InfoTitle = styled.h2 `
    font-weight: bold;
    font-size: 60px;
    margin-bottom: 20px;
    color: cyan;

    @media (max-width: 767px) {
        text-align: center;
    }
`

export const Span = styled.span `
    font-weight: normal;
`

export const InfoDesc = styled.p `
    color: white;
    margin-bottom: 15px;
    line-height: 1.8;
    background-color: rgba(0, 0, 0, 0.5);
    padding-left: 7px;
    font-size: 18px;

    @media (max-width: 767px) {
        font-size: 14px;
    }

`

export const Link = styled.a `
    text-decoration: none;
    color: cyan;
    font-weight: bold;
`