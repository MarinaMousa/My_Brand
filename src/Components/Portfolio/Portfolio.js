import React, {useState, useEffect} from "react";
import { PortofolioSection, PortofolioTitle, Span, ImageWrapper, Image, Overlay, OverlaySpan, Box } from './style.js';
import axios from "axios";


const Portofolio = () => {

  const [ images, setImages ] = useState([]);

  useEffect ( () => {
    axios.get("js/data.json").then(res => { setImages(res.data.portfolio)});
  }, [])

  const PortfolioImages = images.map((imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt=""/>
        <Overlay>
            <OverlaySpan>
            See More
            </OverlaySpan>
        </Overlay>

      </ImageWrapper>

    )
  })

  return (
    <PortofolioSection>
            <PortofolioTitle><Span>Our</Span> Works</PortofolioTitle>
            
            <Box>
              {PortfolioImages}
            </Box>
            
        </PortofolioSection>
  );
}

export default Portofolio;