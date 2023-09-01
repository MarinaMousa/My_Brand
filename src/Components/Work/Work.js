import React, { Component } from "react";
import axios from "axios";
import { WorkSection, Container, WorkTitle,Span, WorkPart, Image, PartTitle, Line, PartDesc} from './style.js';

class Work extends Component {

  state = {
    works : []
  }

  componentDidMount () {
    axios.get("js/data.json").then(res => {this.setState({works : res.data.works});});
  }

  render() {

    const {works} = this.state;

    const workList = works.map( (workItem) => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
        <Image src={workItem.image} alt=""/>
        <PartTitle>{workItem.title}</PartTitle>
        <Line/>
        <PartDesc>
            {workItem.body}
        </PartDesc>
    </WorkPart>
      )
    })

    return (
      <WorkSection>
        <WorkTitle><Span>Our</Span> Team</WorkTitle>
              <Container>
                  {workList}
              </Container>
          </WorkSection>
    );
  }
}

export default Work;