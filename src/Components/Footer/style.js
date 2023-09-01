import { styled } from "styled-components";

export const FooterSection = styled.div `
    height: 150px;
    background-image: linear-gradient(to bottom, cyan, cyan, black, black);
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    padding-Bottom: 20px;
`

export const Container = styled.div `
    background: url('images/h.jpg');
    width: 90%;
    height: 80%;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    box-shadow: 0px 5px 40px #0affed, 0px -4px 7px 2px #000000;
`


export const Logo = styled.div `
    color: cyan;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -85%);
    text-shadow: 0px 0px 40px #ffffff, 0px 0px 40px #0affed;
    
    @media (max-width: 767px) {
        text-align: center;
    }

`

export const Holder = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: row;
    column-gap: 20px;
`

export const IconBack = styled.a `
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
position: relative;
top: 50%;
transform: translate(-50%, -50%);
height: 20px;
width: 20px;
text-align: center;
background-color: cyan;
border-radius: 2px;


&:hover {
    background-color: ${props => props.pos === 1 ? '#1877F2' : props.pos === 3 ? '#00acee' : props.pos === 4 ? '#0072b1' : null};
    background-image: ${props => props.pos === 2 ? 'linear-gradient(to bottom, #4f5bd5 ,#962fbf, #d62976, #fa7e1e, #feda75)' : null};
}

@media (max-width: 767px) {
    
}

`

export const Icon = styled.i `
color: #fff;
font-size: 18px;
posieion: relative;

transform: translateX(14%);
`

export const Link = styled.p `
    padding-top: 5px;
    color: white;
    font-size: 11px;

`

export const Span = styled.span `
    color: cyan;
`