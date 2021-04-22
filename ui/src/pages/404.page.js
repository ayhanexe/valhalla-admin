import React, { Component } from "react";
import Particles from "react-particles-js";
import { NotFoundPageStyles as s } from "../components/styles";

class NotFoundPage extends Component {
  render() {
    const particlesParams = {
      particles: {
        number: {
          value: 25,
          density: {
            enable: true,
            value_area: 100,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: false,
          direction: "right",
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.02,
          },
        },
      },
      retina_detect: true,
    };
    return (
      <s.PageContainer>
        <Particles height="100vh" width="100vw" params={particlesParams} />
        <s.PageInner>
          <s.MoonContainer>
            <s.FirstFour>4</s.FirstFour>
            <s.MoonIcon />
            <s.LastFour>4</s.LastFour>
          </s.MoonContainer>
        </s.PageInner>
      </s.PageContainer>
    );
  }
}

export default NotFoundPage;
