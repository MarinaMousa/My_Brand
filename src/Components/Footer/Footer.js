import React, {useState, useEffect} from "react"; 
import { FooterSection, Container, Logo, Holder,IconBack, Icon, Link, Span} from './style.js';
import axios from "axios";

const Footer = () => {


  const [ icons, setIcons ] = useState([]);

  useEffect ( () => {
    axios.get("js/data.json").then(res => { setIcons(res.data.social)});
  }, [])

  const socialMedia = icons.map((socialItem) => {
    return (
      <IconBack key={socialItem.id} pos={socialItem.id}><Icon className={socialItem.icon}></Icon></IconBack>

    )
  })


  return (
    <FooterSection>
        <Container>
        <Logo>
          PLUS +
        </Logo>
        <Holder>
        {socialMedia}
        </Holder>
        </Container>
        <Link> &copy; 2023 <Span>PLUS +</Span> All Rights Reserved</Link>
    </FooterSection>
  );
}

export default Footer;