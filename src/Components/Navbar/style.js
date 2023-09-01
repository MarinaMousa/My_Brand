import { styled } from "styled-components";



export const NavbarSection = styled.div `
position: absolute;
width: 90%;
left: 50%;
transform: translate(-50%, 50px);
z-index: 100;
background-color: rgba(0, 0, 0, 0);
border-radius: 15px;

`
export const Container = styled.div `
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    position: relative;

    @media (max-width: 767px) {
        flex-direction: column;
    }

`
export const Logo = styled.div `
    color: cyan;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 25px;
    transition: 0.3s;
    text-shadow: 0px 0px 40px #ffffff, 0px 0px 40px #0affed;
    
    @media (max-width: 767px) {
        text-align: center;
    }

`

export const UlList = styled.ul `
    list-style: none;
    padding-left: 0;
`

export const ListItem = styled.li `
    display: inline-block;
`

export const Anchor = styled.a `
display: flex;
flex-wrap: nowrap;
justify-content: center;
text-shadow: 0px 3px 10px white;
align-items: center;
font-size: 18px;
font-weight: bold;
text-decoration: underline;
height: 40px;
position: relative;
color: white;
padding: 0 27px;
transition: 0.3s;
overflow: hidden;

    &:hover {
        color: cyan;
    }

    @media (max-width: 767px) {
        font-size: 14px;
        padding: 0 5px;
        font-weight: normal;
    }

`
export const Nav = Anchor