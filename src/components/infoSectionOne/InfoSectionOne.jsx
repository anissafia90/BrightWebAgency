import React from "react";
import sectionOneImage from "../../images/section1.png";
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

const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper direction={"row"}>
        <Right>
          <Image src={sectionOneImage} />
        </Right>
        <Left>
          <Title>Why Choose Us?</Title>
          <Header>IT lifecycle management all in one place</Header>
          <Description>
            We are a dynamic duo of software engineers committed to excellence.
            With a strong foundation in modern web technologies and a passion
            for continuous learning, we blend technical expertise with creative
            flair to deliver impactful web solutions. Our mission is to help
            businesses stand out online with tailor-made websites that drive
            real results.
          </Description>
          <List>
            <ListItem> Transparent advice</ListItem>
            <ListItem> Volume bundling</ListItem>
            <ListItem> Global IT sourcing</ListItem>
            <ListItem> International deliveries</ListItem>
            <ListItem> Software refuelling</ListItem>
            <ListItem> Nationwide service network</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionOne;
