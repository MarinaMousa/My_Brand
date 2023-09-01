import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection,Container, Logo, UlList, ListItem, Anchor, Nav} from './style.js';


const Navbar = () => {
  return (
    <NavbarSection>
      <Container>
        <Logo>
          PLUS +
        </Logo>
        <UlList>
          <ListItem><Link to="/"><Nav>Home</Nav></Link></ListItem>
          <ListItem><Anchor href="#">Work</Anchor></ListItem>
          <ListItem><Anchor href="#">Portofolio</Anchor></ListItem>
          <ListItem><Anchor href="#">About</Anchor></ListItem>
          <ListItem><Link to="/contact"><Nav>Contact</Nav></Link></ListItem>
        </UlList>
      </Container>
    </NavbarSection>
  );
}


export default Navbar;