import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { RegisterPageStyles as s } from "../components/styles";

export class RegisterPage extends Component {
    render() {
        return (
            <s.Container>
                <s.RegisterContainer>
                    <s.Title>register</s.Title>
                    <s.Form>
                        <s.Input type="text" placeholder="Username" />
                        <s.Input type="email" placeholder="Email" />
                        <s.Input type="password" placeholder="Password" />
                        <s.Input type="password" placeholder="Password Again" />
                        <Link to="/">
                            <s.Input type="button" value="REGISTER" />
                        </Link>
                        <s.FooterText>Are you have an account already? <s.CustomLink to="/auth/login">Login</s.CustomLink></s.FooterText>
                    </s.Form>
                </s.RegisterContainer>
            </s.Container>
        )
    }
}

export default RegisterPage
