import { styled } from "styled-components";

export const ProfileSkills = styled.div `
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: center;
    background-image: linear-gradient(to bottom, cyan, black, black);
`

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-right: 20px;
    margin-left: 20px;
    flex-wrap: wrap;
`

export const ProfileSection = styled.div `
    position: relative;
    width: 400px;
    height: 400px;

`

export const Image = styled.img `
    width: 100%;
    height: 100%;
`

export const Skills = styled.div `
    width: 50%;

    @media (max-width: 1052px) {
        width: 80%;
    }

`

export const SkillsDesc = styled.p `
    font-size: 15px;
    text-align: left;
    color: white;
    line-height: 1.5;
    margin-bottom: 20px;

    @media (max-width: 767px) {
        font-size: 12px;
    }

`

export const Bar = styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 20px
`

export const Title = styled.span `
    float: left;
    margin-left: 50px;
    margin-bottom: 10px;
    color: cyan;
`

export const Perc = styled.span `
    float: right;
    margin-right: 50px;
    margin-bottom: 10px;
    color: cyan;
`

export const Para = styled.div `
    height: 10px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
    border-radius: none;
`

export const ParentSpan = styled.span `
    background-image: linear-gradient(45deg,#0dcaf0 25%,#373b3e 25%,#000 50%,#0dcaf0 50%,#0dcaf0 75%,#373b3e 75%,#000);
    position: absolute;
    display: block;
    color: cyan, black;
    top: 0;
    right: 0;
    bottom: 0;
    width: ${props => props.sp === 1 ? '100%' : props.sp === 2 ? '90%' : props.sp === 3 ? '80%' : props.sp === 4 ? '60%' : null};
`

export const SkillsTitle = styled.h2 `
    font-size: 60px; 
    margin-bottom: 20px;
    font-weight: normal;
`

export const TitleSpan = styled.span `
    font-weight: bold;
`