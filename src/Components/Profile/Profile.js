import React, {useState, useEffect} from "react";
import axios from "axios";
import { ProfileSkills, Container, ProfileSection, Image, Skills, SkillsDesc, Bar, Title, Perc, Para, ParentSpan, SkillsTitle, TitleSpan} from './style.js';

const Profile = () => {

  const [ skill, setSkills ] = useState([]);

  useEffect ( () => {
    axios.get("js/data.json").then(res => { setSkills(res.data.skills)});
  }, [])


  const SkillsData = skill.map((skillItem) => {
    return (
      <Bar key={skillItem.id}>
          <Title>{skillItem.title}</Title>
          <Perc>{skillItem.perc}</Perc>
          <Para className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={skillItem.id} aria-valuemin={"0"} aria-valuemax={"100"}>
              <ParentSpan className="progress-bar progress-bar-striped progress-bar-animated" sp={skillItem.id}></ParentSpan>
          </Para>
      </Bar>
)
  })


  return (
    <ProfileSkills>
      <SkillsTitle>Our <TitleSpan>skills</TitleSpan></SkillsTitle>
      <Container>
        <ProfileSection>
        <Image src="/images/man.png" alt=""/>
        </ProfileSection>
                
        <Skills>
            <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>

            {SkillsData}

        </Skills>

  
      </Container>
    </ProfileSkills>
  );
}


export default Profile;