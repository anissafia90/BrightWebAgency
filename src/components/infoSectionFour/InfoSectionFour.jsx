import React from "react";
import { Container } from "../infoSectionTwo/InfoSectionTwo";
import sectionImage4 from "../../images/bg2.jpg";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
`;
const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Number = styled.div`
  font-weight: bold;
  font-size: 50px;
  color: ${(props) => props.theme.colors.text};
`;
const SubTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const InfoSectionFour = () => {
  return (
    <Container sectionImage={sectionImage4} Height={"300px"}>
      <Card>
        <CardContent>
          <Number>87+</Number>
          <SubTitle>LinkedIn Followers</SubTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>8+</Number>
          <SubTitle>Complete Projects</SubTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>5+</Number>
          <SubTitle>5 Star Rating</SubTitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>38+</Number>
          <SubTitle>Likes</SubTitle>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InfoSectionFour;
