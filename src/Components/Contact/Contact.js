import React from "react";
import { ContactSection, Container, Form, Input, TextArea, ContactBtn } from "./style";

const Contact = () => {
  return (
    <ContactSection>
        <Container>
        <Form>
            <Input type="text" name="name" placeholder="Your Full Name"/>
            <Input type="text" placeholder="Your Phone" name="mobile"/>
            <Input type="text" placeholder="Your Adress" name="adress"/>
            <Input type="email" name="mail" placeholder="Your Email"/>
            <TextArea name="message" placeholder="Your Message"></TextArea>
            <ContactBtn>Send Message</ContactBtn>
        </Form>
        </Container>
    </ContactSection>
  );
}

export default Contact;