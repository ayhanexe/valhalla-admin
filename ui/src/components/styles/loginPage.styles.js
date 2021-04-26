import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const GoogleSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={`${props.className}`}
    viewBox="0 0 488 512"
    {...props}
  >
    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
  </svg>
);

const FacebookSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={`bi bi-facebook ${props.className}`}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
  </svg>
);

const TwitterSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={`bi bi-twitter ${props.className}`}
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </svg>
);

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginAreaContainer = styled.div`
  width: auto;
  min-width:100px;
  height: auto;
  padding: 10px;
  background-color: #161b32;
  border-radius: 5px;
  @media (max-width: 400px) {
    width:100%;
  }
`;

export const LoginAreaTitle = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 30px 0;
`;

export const LoginLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const RemembeMeText = styled.span`
  font-size: 0.85em;
  margin: 0 0 0 7px;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  height: 30px;

  margin: 5px 0;

  padding: 0 0 0 7px;

  border: none;
  border-radius: 5px;
  background-color: #2c3146;
  color: whitesmoke;
  &[type="button"] {
    width: 100%;
  }
`;

export const loginAlternativesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const IconBase = css`
  width: 25px;
  height: 25px;
  flex: 0 0 25px;
  margin: 5px;
  cursor: pointer;
`;

export const GoogleIcon = styled(GoogleSVG)`
  ${IconBase}
  color:whitesmoke;
`;

export const FacebookIcon = styled(FacebookSVG)`
  ${IconBase}
  color:#5F6FFF;
`;

export const TwitterIcon = styled(TwitterSVG)`
  ${IconBase}
  color:#38D8FF;
`;

export const PasswordResetText = styled(Link)`
  font-size: 0.85em;
  text-align:right;
  color:whitesmoke !important;
  text-decoration:none;
  opacity:0.5;
  transition:opacity .3s ease-out;
  &:hover {
    opacity:1;
  }
`;

export const FooterText = styled.span`
    width:100%;
    float:right;
    text-align:right;
    font-size:.85em;
    color:whitesmoke;
    opacity:0.5;
    transition:opacity .3s ease-out;
    &:hover {
        opacity:1;
    }
`

export const CustomLink = styled(Link)`
    color:aqua !important;
    text-decoration:none;
`