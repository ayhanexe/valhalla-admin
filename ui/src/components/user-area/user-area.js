import { Component } from "react";
import { connect } from "react-redux";
import gsap from "gsap/all";

import { UserAreaStyles as s } from "../styles";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

class UserArea extends Component {
  cooldown = false;
  get dropdown() {
    return document.querySelector("#user-area-dropdown");
  }

  toggleDropdown(event) {
    this.cooldown = true;
    const dropdown = this.dropdown;
    const isDropdownOpen =
      parseInt(window.getComputedStyle(dropdown).opacity) === 1;
    const timeline = gsap.timeline();

    timeline
      .add([
        gsap.to(dropdown, {
          opacity: isDropdownOpen ? 0 : 1,
          visibility: isDropdownOpen ? "hidden" : "visible",
          duration: 0.3,
          ease: "power.out",
        }),
      ])
      .then(() => (this.cooldown = false));
  }

  render() {
    return (
      <s.Container>
        <s.ProfileContainer
          onClick={(event) =>
            this.cooldown ? null : this.toggleDropdown(event)
          }
        >
          <s.Profile
            src={`${process.env.PUBLIC_URL}/assets/media/profiles/admin-profile.jpeg`}
          />
        </s.ProfileContainer>
        <s.Dropdown id="user-area-dropdown">
          <s.DropdownHeader>
            <s.DropdownTitle>Ayxan A.</s.DropdownTitle>
            <s.DropdownDescription>Full Stack Developer</s.DropdownDescription>
          </s.DropdownHeader>

          <s.DropdownItemLink to="logout">
            <s.DropdownItemIcon icon={faDoorOpen} />
            <s.DropdownItemText>Logout</s.DropdownItemText>
          </s.DropdownItemLink>
        </s.Dropdown>
      </s.Container>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(UserArea);
