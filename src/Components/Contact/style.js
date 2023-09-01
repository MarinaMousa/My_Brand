import { styled } from "styled-components";

export const ContactSection = styled.div `
    height: 100vh;
    background-image: linear-gradient(to bottom, black, black, cyan);
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`

export const Container = styled.div `
    padding-top: 100px;
    padding-bottom: 50px;
    width: 90%;
    height: auto;
    background-size: cover;
    background-position: center;
    position: relative;
    left: 50%;
    transform: translate(-50%, 40px);
    border-radius: 15px;
    box-shadow: 0px -5px 40px #0affed, 0px 4px 7px 2px #000000;

    @media (max-width: 767px) {
        padding-top: 150px;
    }

    @media (max-width: 500px) {
        padding-top: 200px;
    }
`

export const Form = styled.form `
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 70%;
`

export const Input = styled.input `
    width: 90%;
    padding: 15px;
    height: 50px;
    outline: none;
    color: white;
    display: block;
    margin-bottom: 15px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;

    &:focus {
        outline: none;
        border: 2px solid cyan;
    }

    @media (max-width: 500px) {
        height: 20px;
    }
    
`

export const TextArea = styled.textarea `
    height: 90px;
    width: 90%;
    padding: 15px;
    margin-bottom: 25px;
    outline: none;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    color: white;

    &:focus {
        outline: none;
        border: 2px solid cyan;
    }

    @media (max-width: 500px) {
        height: 50px;
    }
`

export const ContactBtn = styled.button `
    color: black;
    font-size: 16px;
    border-radius: 10px;
    border: 2px solid black;
    background-color: transparent;
    padding: 10px 25px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.4s;
    &:hover {
        background: cyan;
        color: black;
        border: 2px solid cyan;
    }

    @media (max-width: 767px) {
        font-size: 12px;
        padding: 7px;
        margin-bottom: 0px;
    }

`