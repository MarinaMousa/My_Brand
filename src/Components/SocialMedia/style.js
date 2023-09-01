import { styled } from "styled-components";



export const Gallery = styled.div `
    background-image: linear-gradient(to bottom, black, black, cyan);
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
   
    justify-content: center;
    padding-top: 70px; 
    padding-bottom: 200px;
    height: 650px;
`

export const Title = styled.h2 `
    font-weight: bold;
    font-size: 60px;
    margin-bottom: 90px;
    color: cyan;
    text-align: center;
`

export const Container = styled.div `
    position: relative;
    width: 170px;
    height: 200px;
    transform-style: preserve-3d;
    animation: rotate 30s linear infinite;


    @media (max-width: 992px) {
        width: 90px;
        height: 110px;
}


@keyframes rotate {
    0% {
        transform: perspective(1000px) rotateY(0deg);
    }
    100% {
        transform: perspective(1000px) rotateY(360deg);
    }
}


`

export const Span = styled.span `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i)*30deg))translateZ(350px);

    @media (max-width: 992px) {
            transform: rotateY(calc(var(--i)*30deg))translateZ(180px);
    }

`


export const Image = styled.img `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
    transition: 2s;
    border: 3px solid var(--main-color);
    box-shadow: -1px 6px 20px 0px #979595;


    @media (max-width: 992px) {
            border-radius: 10px;
    }

    &:hover {
        transform: translateY(-10px) scale(1.1);
    }

`