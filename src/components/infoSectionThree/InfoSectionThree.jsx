import React from "react";
import {
  Container,
  Description,
  Header,
  Image,
  Left,
  List,
  ListItem,
  Right,
  Title,
  Wrapper,
} from "../styles/styled.Section";
import sectionThreeImage from "../../images/section3.png";

const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper direction={"row-reverse"}>
        <Right>
          <Image src={sectionThreeImage} />
        </Right>
        <Left>
          <Title>Why Choose Us?</Title>
          <Header>
            Experience innovation and quality with BrightWeb’s tailored digital
            solutions.
          </Header>
          <Description>
            At BrightWeb, we specialize in delivering high-quality web
            development and digital solutions tailored to your needs. Our
            remote-first approach ensures flexibility and efficiency, while our
            team of skilled professionals guarantees top-notch results. We’re
            passionate about innovation, collaboration, and creating impactful
            digital experiences that drive growth for your business.
          </Description>
          <List>
            <ListItem> Expertise</ListItem>
            <ListItem>Personalized Service</ListItem>
            <ListItem> Commitment to Quality</ListItem>
            <ListItem> Global Reach</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;
