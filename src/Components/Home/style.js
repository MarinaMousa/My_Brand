import { styled } from "styled-components"; 

export const HomeSection = styled.div `
    height: 550px;
    background-image: linear-gradient(to bottom, black, black, cyan);
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

export const Container = styled.div `
    background: url('images/h.jpg');
    width: 90%;
    height: 80%;
    background-size: cover;
    background-position: center;
    position: relative;
    left: 50%;
    transform: translate(-50%, 40px);
    border-radius: 15px;
    box-shadow: 0px -5px 40px #0affed, 0px 4px 7px 2px #000000;
`

export const HomeInformation = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    @media (max-width: 767px) {
        transform: translate(-50%,-32%);
    }
`

export const HomeTitle = styled.h2 `
    font-size: 50px;
    font-weight: bold;
    color: cyan;
    text-shadow: 0px 0px 40px #ffffff, 0px 0px 40px #0affed;
    margin-bottom: 0px;

    @media (max-width: 767px) {
        display: none;
    }


`

export const HomeInfo = styled.h4 `
    font-size: 35px;
    color: white;
    margin-bottom: 20px;
    margin-top: 10px;


`

export const Span = styled.span `
    color: cyan;
`

export const HomeBtn = styled.button `
    color: cyan;
    font-size: 16px;
    border-radius: 10px;
    border: 2px solid cyan;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.4s;
    &:hover {
        background: cyan;
        color: black;
    }

    @media (max-width: 767px) {
        font-size: 12px;
        padding: 7px;
        margin-bottom: 0px;
    }

`
