import React from "react";
import styled from "styled-components";
import { breakpoint } from "../frontend-config";

import Header from "../components/header/Header";

import { Heading1, TextBody } from "../components/shared/styles";

const Section = styled.div`
  text-align: center;
  background: ${props => props.theme.colors.grey};
  padding: 35px 75px 38px;

  @media (min-width: ${breakpoint("lg")}) {
    padding: 40px 75px 62px;
  }
`;

const Title = styled(Heading1)`
  font-size: 31px;
  color: ${props => props.theme.colors.midGreen};
  margin-bottom: 2px;

  @media (min-width: ${breakpoint("lg")}) {
    margin-bottom: 12px;
    font-size: 53px;
  }
`;

const Subtext = styled(TextBody)`
  color: ${props => props.theme.colors.light};
`;

const About = () => {
  return (
    <Section>
      <Title>About</Title>
      <Subtext>We believe in Freedom and Independence</Subtext>
    </Section>
  );
};

About.Header = Header;

export default About;
