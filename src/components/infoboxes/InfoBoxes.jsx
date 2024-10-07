import React from "react";
import TextBanner from "../textbanner/TextBanner";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardTitle,
  CardDesc,
  CardBotton,
} from "../styles/styled.Card";

const Container = styled.div`
  margin-right: 22px;
  margin-left: 22px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.bgDefault};
`;

const InfoBoxes = () => {
  return (
    <div>
      <TextBanner title={"What We provide"} subtitle={"Our Services"} />
      <Container>
        <Card>
          <CardContent padding={"5%"}>
            <CardTitle>Web Development</CardTitle>
            <CardDesc>
              Develop your website using robust and efficient technologies{" "}
            </CardDesc>
            <CardBotton>Read more</CardBotton>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>SEO Optimization</CardTitle>
            <CardDesc>
              Enhance your website's visibility and rank higher on search
              engines.
            </CardDesc>
            <CardBotton>Read more</CardBotton>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Email Marketing</CardTitle>
            <CardDesc>
              Engage your audience and drive conversions with effective email
              campaigns.
            </CardDesc>
            <CardBotton>Read more</CardBotton>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Web maintenance</CardTitle>
            <CardDesc>
              Maintain your website securely with our web expertise.
            </CardDesc>
            <CardBotton>Read more</CardBotton>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Website redesign</CardTitle>
            <CardDesc>
              Give new life to your online presence! At Brightweb, we are aware
              of the importance of a high-performance website. To this end, our
              team of web design experts is there to support you at every stage
              of the redesign process.
            </CardDesc>
            <CardBotton>Read more</CardBotton>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Web training</CardTitle>
            <CardDesc>
              Improve the handling of your sites through individualized support.
            </CardDesc>
            <CardBotton>Read more</CardBotton>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default InfoBoxes;
