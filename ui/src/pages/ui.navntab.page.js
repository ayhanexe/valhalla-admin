import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UINavntabPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Navs and tabs</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Base nav</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Navigation available in Bootstrap share general markup and
                styles, from the base <code>.nav</code> class to the active and
                disabled states. Swap modifier classes to switch between each
                style.
                <br />
                <br />
                The base <code>.nav</code> component is built with flexbox and
                provide a strong foundation for building all types of navigation
                components. It includes some style overrides (for working with
                lists), some link padding for larger hit areas, and basic
                disabled styling.
              </tc.TutorialBlockText>
              <ul className="nav bg-dark">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>

              <tc.TutorialBlockText>
                Classes are used throughout, so your markup can be super
                flexible. Use <code>{`<ul>`}</code>s like above,{" "}
                <code>{`<ol>`}</code> if the order of your items is important,
                or roll your own with a <code>{`<nav>`}</code> element. Because
                the <code>.nav</code> uses <code>display: flex</code>, the nav
                links behave the same as nav items would, but without the extra
                markup.
              </tc.TutorialBlockText>
              <nav className="nav bg-dark">
                <a className="nav-link active" aria-current="page" href="/">
                  Active
                </a>
                <a className="nav-link" href="/">
                  Link
                </a>
                <a className="nav-link" href="/">
                  Link
                </a>
                <a
                  className="nav-link disabled"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </nav>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Horizontal alignment
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Change the horizontal alignment of your nav with flexbox
                utilities. By default, navs are left-aligned, but you can easily
                change them to center or right aligned.
                <br />
                <br />
                Centered with <code>.justify-content-center</code>:
              </tc.TutorialBlockText>
              <ul className="nav bg-dark justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <tc.TutorialBlockText>
                Right-aligned with <code>.justify-content-end</code>:
              </tc.TutorialBlockText>
              <ul className="nav bg-dark justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Vertical</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Stack your navigation by changing the flex item direction with
                the <code>.flex-column</code> utility. Need to stack them on
                some viewports but not others? Use the responsive versions
                (e.g.,
                <code>.flex-sm-column</code>).
              </tc.TutorialBlockText>
              <ul className="nav bg-dark flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <tc.TutorialBlockText>
                As always, vertical navigation is possible without{" "}
                <code>{`<ul>`}</code>s, too.
              </tc.TutorialBlockText>
              <nav className="nav bg-dark flex-column">
                <a className="nav-link active" aria-current="page" href="/">
                  Active
                </a>
                <a className="nav-link" href="/">
                  Link
                </a>
                <a className="nav-link" href="/">
                  Link
                </a>
                <a
                  className="nav-link disabled"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </nav>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Tabs</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Takes the basic nav from above and adds the{" "}
                <code>.nav-tabs</code> class to generate a tabbed interface. Use
                them to create tabbable regions with our tab JavaScript plugin.
              </tc.TutorialBlockText>
              <ul className="nav bg-dark border-dark nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link bg-primary border-primary active"
                    aria-current="page"
                    href="/"
                  >
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Pills</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Take that same HTML, but use <code>.nav-pills</code> instead:
              </tc.TutorialBlockText>
              <ul className="nav bg-dark p-2 nav-pills">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Fill and justify</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Force your <code>.nav</code>’s contents to extend the full
                available width one of two modifier classes. To proportionately
                fill all available space with your <code>.nav-items</code>, use{" "}
                <code>.nav-fill</code>. Notice that all horizontal space is
                occupied, but not every nav item has the same width.
              </tc.TutorialBlockText>
              <ul className="nav bg-dark p-2 nav-pills nav-fill">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Much longer nav link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <tc.TutorialBlockText>
                When using a <code>{`<nav>`}</code>-based navigation, you can
                safely omit <code>.nav-item</code> as only{" "}
                <code>.nav-link</code> is required for styling{" "}
                <code>{`<a>`}</code> elements.
              </tc.TutorialBlockText>
              <nav className="nav bg-dark p-2 nav-pills nav-fill">
                <a className="nav-link active" aria-current="page" href="/">
                  Active
                </a>
                <a className="nav-link" href="/">
                  Much longer nav link
                </a>
                <a className="nav-link" href="/">
                  Link
                </a>
                <a
                  className="nav-link disabled"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </nav>
              <tc.TutorialBlockText>
                For equal-width elements, use <code>.nav-justified</code>. All
                horizontal space will be occupied by nav links, but unlike the{" "}
                <code>.nav-fill</code>
                above, every nav item will be the same width.
              </tc.TutorialBlockText>
              <ul className="nav bg-dark p-2 nav-pills nav-justified">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Much longer nav link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
              <tc.TutorialBlockText>
                Similar to the <code>.nav-fill</code> example using a{" "}
                <code>{`<nav>`}</code>-based navigation.
              </tc.TutorialBlockText>
              <nav className="nav bg-dark p-2 nav-pills nav-justified">
                <a className="nav-link active" aria-current="page" href="/">
                  Active
                </a>
                <a className="nav-link" href="/">
                  Much longer nav link
                </a>
                <a className="nav-link" href="/">
                  Link
                </a>
                <a
                  className="nav-link disabled"
                  href="/"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </nav>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Tabs with dropdowns</tc.TutorialBlockTitle>
              <ul className="nav  border-dark bg-dark nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link bg-primary border-primary text-light active"
                    aria-current="page"
                    href="/"
                  >
                    Active
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="/"
                    role="button"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Separated link
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="/"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UINavntabPage;
