import React from "react";
import { HomeSection,Container, HomeInformation, HomeTitle, HomeInfo, Span, HomeBtn} from './style.js';

const Home = () => {
  return (
    <HomeSection>
        <Container>
          <HomeInformation>
            <HomeTitle>Plus +</HomeTitle>
            <HomeInfo>All Around <Span>The</Span> World</HomeInfo>
            <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
        </Container>
    </HomeSection>
  );
}

export default Home;