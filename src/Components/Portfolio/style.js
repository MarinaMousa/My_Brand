import { styled } from "styled-components";

export const PortofolioSection = styled.div `
    background-image: linear-gradient(to bottom, black, black, cyan);
    padding-top: 70px;
    padding-bottom: 70px;
    position: relative; 
`

export const PortofolioTitle = styled.h2 `
    text-align: center;
    padding-top: 30px;
    font-size: 60px; 
    color: cyan;
`
export const Box = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top: 20px;
gap: 10px;
padding: 10px;

`
export const Span = styled.span `
    font-weight: normal;
    color: cyan;
`

export const ImageWrapper = styled.div `
    width: 250px;
    height: 250px;
    position: relative;
    transition: 0.3s;
    border-radius: 5px;
    box-shadow: -5px 7px 13px 0px rgb(55 55 55);

    &:hover > div {
        opacity: 1
    }
`

export const Image = styled.img `
    width: 90%;
    height: 90%;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
`

export const Overlay = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to bottom, #0000007d, #0000007d, #00ffff80);
    font-size: 15px;
    opacity: 0
`

export const OverlaySpan = styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: black;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    color: cyan;
`

