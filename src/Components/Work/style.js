import { styled } from "styled-components";

export const WorkSection = styled.div `
    padding-top: 70px;
    padding-bottom: 70px;
    position: relative;
    text-align: center;
    background-image: linear-gradient(to bottom, cyan, black, black);
`

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;

`

export const WorkTitle = styled.h2 `
    font-size: 60px; 
`

export const Span = styled.span `
    font-weight: normal
`

export const WorkPart = styled.div `
    box-shadow: 0 5px 15px cyan;
    border-radius: 7px;
    transition: transform 0.5s , box-shadow 0.3s;
    position: relative;
    margin-top: 20px;
    width: 280px;
    height: auto;
    padding-top: 3px;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgb(0 0 0 / 60%);
    } 
`

export const Image = styled.img `
    width: 90%;
    height: 270px;
    border-radius: 5px;
    margin-top: 8px;
`

export const PartTitle = styled.h4 `
    font-size: 25px;
    color: cyan;
    margin-bottom: 20px;
    margin-top: 20px;

`

export const Line = styled.hr `
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
    color: cyan;
`

export const PartDesc = styled.p `
    font-size: 14px;
    color: #888;
    padding: 20px
`