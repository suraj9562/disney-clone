import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="image not found" />
          <SignUp> Get All There</SignUp>
          <Description>Get premier access to RAYA and the Last dragon for an additional fee with a Disney+ subscription. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eligendi, quia sunt facere, in, qui nostrum iusto necessitatibus repellendus natus ducimus!</Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="image not found" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 100vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const CTALogoOne = styled.img`
  width: 100%;
  min-height: 1px;
  max-width: 600px;
  margin-bottom: 10px;
  display: block;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  color: #f9f9f9;
  padding: 16.5px 0;
  border: 1x solid transparent;
  border-radius: 4px;
  letter-spacing: 1.3px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
    text-align: center;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 13px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

export default Login;
