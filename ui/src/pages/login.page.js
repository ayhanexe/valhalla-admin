import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { HellaCheckbox } from "../components/hella-components";
import { LoginPageStyles as s } from "../components/styles";

export class LoginPage extends Component {
  render() {
    return (
      <s.Container>
        <ReactTooltip />
        <s.LoginAreaContainer>
          <s.LoginAreaTitle>Login</s.LoginAreaTitle>
          <s.Form>
            <s.Input type="text" placeholder="Email" />
            <s.Input type="text" placeholder="Password" />
            <s.LoginLabel htmlFor="rememberme">
              <s.Input type="checkbox" id="rememberme" />
              <s.RemembeMeText>Remember me</s.RemembeMeText>
            </s.LoginLabel>
            <Link to="/" onClick={(e) => {
              localStorage.setItem("valhalla-login", "true")
            }}>
              <s.Input type="button" value="Login" />
            </Link>
            <s.PasswordResetText to="/">password reset</s.PasswordResetText>
          </s.Form>
          <s.loginAlternativesContainer>
            <s.GoogleIcon
              data-place="bottom"
              data-effect="solid"
              data-tip="Login with Google"
            />
            <s.FacebookIcon
              data-place="bottom"
              data-effect="solid"
              data-tip="Login with Facebook"
            />
            <s.TwitterIcon
              data-place="bottom"
              data-effect="solid"
              data-tip="Login with Twitter"
            />
          </s.loginAlternativesContainer>
          <s.FooterText>I have not account! <s.CustomLink to="/auth/register">Register</s.CustomLink></s.FooterText>
        </s.LoginAreaContainer>
      </s.Container>
    );
  }
}

export default LoginPage;
