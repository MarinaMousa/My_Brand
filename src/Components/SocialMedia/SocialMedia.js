import React from "react";
import { Gallery, Container, Span, Image, Title } from './style.js';
import axios from "axios";


class SocialMedia extends React.Component {

    state = {
        gallery: []
    }

    componentDidMount () {
        axios.get('js/data.json').then( res => { this.setState({ gallery: res.data.gallery})})
    }

    render () {

        const {gallery} = this.state;

        const galleryList = gallery.map( (galleryItem) => {
            return (
                    <Span key={galleryItem.id} style={{"--i":galleryItem.id}}>
                        <Image src={galleryItem.image} alt=""/>
                    </Span>
            );
        });

        return (
        <Gallery>
            <Title>Gallery</Title>
            <Container>
                {galleryList}
            </Container>
        </Gallery>


        );
    }
}

export default SocialMedia;