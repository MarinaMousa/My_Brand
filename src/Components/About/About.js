import React from "react";
import { AboutSection, Container, AboutInfo, InfoTitle, Span, InfoDesc, Link} from './style.js';

const About = () => {
  return (
    <AboutSection>
        <Container>
            <AboutInfo>
                <InfoTitle><Span>About</Span> Us</InfoTitle>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Link href="#">explicabo</Link> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </AboutInfo>
        </Container>
    </AboutSection>
  );
}

export default About;