import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIButtonsPage extends Component {
  render() {
    return (
      <div className="container p-0">
        <tc.TutorialTitle>Bootstrap Buttons</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Standart Buttons</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Bootstrap includes several predefined button styles, each
                serving its own semantic purpose, with a few extras thrown in
                for more control.
              </tc.TutorialBlockText>
              <div className="row">
                <div className="col-12 p-2">
                  <button type="button" className="btn btn-primary btn-sm m-1">
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm m-1"
                  >
                    Secondary
                  </button>
                  <button type="button" className="btn btn-success btn-sm m-1">
                    Success
                  </button>
                  <button type="button" className="btn btn-danger btn-sm m-1">
                    Danger
                  </button>
                  <button type="button" className="btn btn-warning btn-sm m-1">
                    Warning
                  </button>
                  <button type="button" className="btn btn-info btn-sm m-1">
                    Info
                  </button>
                  <button type="button" className="btn btn-light btn-sm m-1">
                    Light
                  </button>
                  <button type="button" className="btn btn-dark btn-sm m-1">
                    Dark
                  </button>

                  <button type="button" className="btn btn-link btn-sm m-1">
                    Link
                  </button>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Outline Buttons</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                In need of a button, but not the hefty background colors they
                bring? Replace the default modifier classes with the
                <code> .btn-outline-* </code> ones to remove all background
                images and colors on any button.
              </tc.TutorialBlockText>
              <div className="row">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm m-1"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm m-1"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm m-1"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm m-1"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning btn-sm m-1"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-sm m-1"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light btn-sm m-1"
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-sm m-1"
                  >
                    Dark
                  </button>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Button tags</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                The .btn classes are designed to be used with the
                <code>{` <button> `}</code>
                element. However, you can also use these classes on
                <code>{` <a> `}</code>
                or
                <code>{` <input> `}</code>
                elements (though some browsers may apply a slightly different
                rendering). When using button classes on <code>{` <a> `}</code>
                elements that are used to trigger in-page functionality (like
                collapsing content), rather than linking to new pages or
                sections within the current page, these links should be given a
                role="button" to appropriately convey their purpose to assistive
                technologies such as screen readers.
              </tc.TutorialBlockText>
              <div className="row">
                <div className="col-12">
                  <a
                    className="btn btn-primary btn-sm m-1"
                    href="/"
                    role="button"
                  >
                    Link
                  </a>
                  <button className="btn btn-primary btn-sm m-1" type="submit">
                    Button
                  </button>
                  <input
                    className="btn btn-primary btn-sm m-1"
                    type="button"
                    value="Input"
                  />
                  <input
                    className="btn btn-primary btn-sm m-1"
                    type="submit"
                    value="Submit"
                  />
                  <input
                    className="btn btn-primary btn-sm m-1"
                    type="reset"
                    value="Reset"
                  />
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Block buttons</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Create responsive stacks of full-width, “block buttons” like
                those in Bootstrap 4 with a mix of our display and gap
                utilities. By using utilities instead of button specific
                classes, we have much greater control over spacing, alignment,
                and responsive behaviors.
              </tc.TutorialBlockText>

              <div className="d-grid gap-2">
                <button className="btn btn-primary btn-lg" type="button">
                  Button
                </button>
                <button className="btn btn-primary btn-sm" type="button">
                  Button
                </button>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Disabled state</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Make buttons look inactive by adding the disabled boolean
                attribute to any <code>{`<button>`}</code> element. Disabled
                buttons have pointer-events: none applied to, preventing hover
                and active states from triggering.
              </tc.TutorialBlockText>

              <button
                type="button"
                className="btn btn-lg btn-primary btn-sm m-1"
                disabled
              >
                Primary button
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-lg btn-sm m-1"
                disabled
              >
                Button
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Sizes</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Fancy larger or smaller buttons? Add <code> .btn-lg </code> or{" "}
                <code> .btn-sm </code> for additional sizes.
              </tc.TutorialBlockText>

              <button type="button" className="btn btn-primary btn-lg m-1">
                Large button
              </button>
              <button type="button" className="btn btn-secondary btn-sm m-1">
                Small button
              </button>
            </tc.TutorialBlock>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Button Group</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Wrap a series of buttons with <code>.btn</code> in{" "}
                <code>.btn-group</code>.
              </tc.TutorialBlockText>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-sm btn-primary">
                  Left
                </button>
                <button type="button" className="btn btn-sm btn-primary">
                  Middle
                </button>
                <button type="button" className="btn btn-sm btn-primary">
                  Right
                </button>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Checkbox and radio button groups
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Combine button-like checkbox and radio toggle buttons into a
                seamless looking button group.
              </tc.TutorialBlockText>
              <div
                className="btn-group btn-group-sm"
                role="group"
                arua-label="Basic checkbox toggle button group"
              >
                <input
                  type="checkbox"
                  className="btn-check btn-sm"
                  id="btncheck1"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  Checkbox 1
                </label>

                <input
                  type="checkbox"
                  className="btn-check btn-sm"
                  id="btncheck2"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">
                  Checkbox 2
                </label>

                <input
                  type="checkbox"
                  className="btn-check btn-sm"
                  id="btncheck3"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">
                  Checkbox 3
                </label>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
        <div className="row p-0 m-0">
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Link Group</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                These classes can also be added to groups of links, as an
                alternative to the .nav navigation components. You can add{" "}
                <code>.active</code> class to active link
              </tc.TutorialBlockText>
              <div className="btn-group">
                <a href="/" className="btn btn-primary active btn-sm">
                  Active link
                </a>
                <a href="/" className="btn btn-primary btn-sm">
                  Link
                </a>
                <a href="/" className="btn btn-primary btn-sm">
                  Link
                </a>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Button toolbar</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Combine sets of button groups into button toolbars for more
                complex components. Use utility classes as needed to space out
                groups, buttons, and more.
              </tc.TutorialBlockText>
              <div
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" className="btn btn-primary btn-sm">
                    1
                  </button>
                  <button type="button" className="btn btn-primary btn-sm">
                    2
                  </button>
                  <button type="button" className="btn btn-primary btn-sm">
                    3
                  </button>
                  <button type="button" className="btn btn-primary btn-sm">
                    4
                  </button>
                </div>
                <div
                  className="btn-group me-2"
                  role="group"
                  aria-label="Second group"
                >
                  <button type="button" className="btn btn-secondary btn-sm">
                    5
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    6
                  </button>
                  <button type="button" className="btn btn-secondary btn-sm">
                    7
                  </button>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Third group"
                >
                  <button type="button" className="btn btn-info btn-sm">
                    8
                  </button>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="row p-0 m-0">
            <div className="col-6">
              <tc.TutorialBlock>
                <tc.TutorialBlockTitle>
                  Button Group Sizing
                </tc.TutorialBlockTitle>
                <tc.TutorialBlockText>
                  Instead of applying button sizing classes to every button in a
                  group, just add <code>.btn-group-*</code> to each{" "}
                  <code>.btn-group</code>, including each one when nesting
                  multiple groups.
                </tc.TutorialBlockText>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="btn-group btn-group-lg">
                      <button className="btn btn-primary">Left</button>
                      <button className="btn btn-primary">Middle</button>
                      <button className="btn btn-primary">Right</button>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="btn-group btn-group">
                      <button className="btn btn-primary">Left</button>
                      <button className="btn btn-primary">Middle</button>
                      <button className="btn btn-primary">Right</button>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="btn-group btn-group-sm">
                      <button className="btn btn-primary">Left</button>
                      <button className="btn btn-primary">Middle</button>
                      <button className="btn btn-primary">Right</button>
                    </div>
                  </div>
                </div>
              </tc.TutorialBlock>
            </div>
            <div className="col-6">
              <tc.TutorialBlock>
                <tc.TutorialBlockTitle>
                  Button Group Nesting
                </tc.TutorialBlockTitle>
                <tc.TutorialBlockText>
                  Place a <code>.btn-group</code> within another{" "}
                  <code>.btn-group</code> when you want dropdown menus mixed
                  with a series of buttons.
                </tc.TutorialBlockText>
                <div className="row mt-2">
                  <div className="col-12">
                    <div className="row mt-2">
                      <div className="col-12">
                        <div
                          className="btn-group btn-group-lg"
                          role="group"
                          aria-label="Button group with nested dropdown"
                        >
                          <button type="button" className="btn btn-primary">
                            1
                          </button>
                          <button type="button" className="btn btn-primary">
                            2
                          </button>

                          <div className="btn-group btn-group-lg" role="group">
                            <button
                              id="btnGroupDrop1"
                              type="button"
                              className="btn btn-primary dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Dropdown
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="btnGroupDrop1"
                            >
                              <li>
                                <a className="dropdown-item" href="/">
                                  Dropdown link
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/">
                                  Dropdown link
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12">
                        <div
                          className="btn-group btn-group"
                          role="group"
                          aria-label="Button group with nested dropdown"
                        >
                          <button type="button" className="btn btn-primary">
                            1
                          </button>
                          <button type="button" className="btn btn-primary">
                            2
                          </button>

                          <div className="btn-group btn-group" role="group">
                            <button
                              id="btnGroupDrop1"
                              type="button"
                              className="btn btn-primary dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Dropdown
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="btnGroupDrop1"
                            >
                              <li>
                                <a className="dropdown-item" href="/">
                                  Dropdown link
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/">
                                  Dropdown link
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12">
                        <div
                          className="btn-group btn-group-sm"
                          role="group"
                          aria-label="Button group with nested dropdown"
                        >
                          <button type="button" className="btn btn-primary">
                            1
                          </button>
                          <button type="button" className="btn btn-primary">
                            2
                          </button>

                          <div className="btn-group btn-group-sm" role="group">
                            <button
                              id="btnGroupDrop1"
                              type="button"
                              className="btn btn-primary dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Dropdown
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="btnGroupDrop1"
                            >
                              <li>
                                <a className="dropdown-item" href="/">
                                  Dropdown link
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/">
                                  Dropdown link
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </tc.TutorialBlock>
            </div>
            <div className="row p-0 m-0">
              <div className="col-6">
                <tc.TutorialBlock>
                  <tc.TutorialBlockTitle>
                    Vertical variation
                  </tc.TutorialBlockTitle>
                  <tc.TutorialBlockText>
                    Make a set of buttons appear vertically stacked rather than
                    horizontally. Split button dropdowns are not supported here.
                  </tc.TutorialBlockText>
                  <div className="btn-group-vertical btn-group-lg mx-2">
                    <button className="btn btn-danger">button 1</button>
                    <button className="btn btn-danger">button 2</button>
                    <button className="btn btn-danger">button 3</button>
                  </div>
                  <div className="btn-group-vertical mx-2">
                    <button className="btn btn-danger">button 1</button>
                    <button className="btn btn-danger">button 2</button>
                    <button className="btn btn-danger">button 3</button>
                  </div>
                  <div className="btn-group-vertical btn-group-sm mx-2">
                    <button className="btn btn-danger">button 1</button>
                    <button className="btn btn-danger">button 2</button>
                    <button className="btn btn-danger">button 3</button>
                  </div>
                </tc.TutorialBlock>
              </div>
              <div className="col-6">
                <tc.TutorialBlock>
                  <tc.TutorialBlockTitle>Close Buttons</tc.TutorialBlockTitle>
                  <tc.TutorialBlockText>
                    Change the default <code>.btn-close</code> to be white with
                    the
                    <code>.btn-close-white</code> class. This class uses the{" "}
                    <code>filter</code> property to invert the{" "}
                    <code>background-image</code>.
                  </tc.TutorialBlockText>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </tc.TutorialBlock>
                <tc.TutorialBlock>
                  <tc.TutorialBlockTitle>White variant</tc.TutorialBlockTitle>
                  <tc.TutorialBlockText>
                    Change the default <code>.btn-close</code> to be white with
                    the
                    <code>.btn-close-white</code> class. This class uses the
                    filter property to invert the <code>background-image</code>.
                  </tc.TutorialBlockText>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    aria-label="Close"
                  ></button>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    disabled
                    aria-label="Close"
                  ></button>
                </tc.TutorialBlock>
              </div>
            </div>
            <div className="col-6">
              <tc.TutorialBlock>
                <tc.TutorialBlockTitle>Disabled state</tc.TutorialBlockTitle>
                <tc.TutorialBlockText>
                  Disabled close buttons change their <code>opacity</code>.
                  We’ve also applied <code>pointer-events:none</code> and{" "}
                  <code>user-select: none</code> to preventing hover and active
                  states from triggering.
                </tc.TutorialBlockText>
                <button
                  type="button"
                  className="btn-close"
                  disabled
                  aria-label="Close"
                ></button>
              </tc.TutorialBlock>
            </div>
            <div className="col-6">
              <tc.TutorialBlock>
                <tc.TutorialBlockTitle>Dropdowns</tc.TutorialBlockTitle>
                <tc.TutorialBlockText>
                  Any single <code>.btn</code> can be turned into a dropdown
                  toggle with some markup changes. Here’s how you can put them
                  to work with either <code>{`<button>`}</code> elements:
                </tc.TutorialBlockText>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                  </ul>
                </div>
                <tc.TutorialBlockText>
                  The best part is you can do this with any button variant, too:
                </tc.TutorialBlockText>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Action
                  </button>
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
                </div>
              </tc.TutorialBlock>
            </div>
            <div className="col-12">
              <tc.TutorialBlock>
                <tc.TutorialBlockTitle>Split button</tc.TutorialBlockTitle>
                <tc.TutorialBlockText>
                  Similarly, create split button dropdowns with virtually the
                  same markup as single button dropdowns, but with the addition
                  of <code>.dropdown-toggle-split</code> for proper spacing
                  around the dropdown caret. We use this extra class to reduce
                  the horizontal <code>padding</code> on either side of the
                  caret by 25% and remove the <code>margin-left</code> that’s
                  added for regular button dropdowns. Those extra changes keep
                  the caret centered in the split button and provide a more
                  appropriately sized hit area next to the main button.
                </tc.TutorialBlockText>
                <div className="btn-group">
                  <button type="button" className="btn btn-danger">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
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
                </div>
              </tc.TutorialBlock>
            </div>
            <div className="col-12">
              <tc.TutorialBlock>
                <tc.TutorialBlockTitle>Pagination</tc.TutorialBlockTitle>
                <tc.TutorialBlockText>
                  We use a large block of connected links for our pagination,
                  making links hard to miss and easily scalable—all while
                  providing large hit areas. Pagination is built with list HTML
                  elements so screen readers can announce the number of
                  available links. Use a wrapping <code>{`<nav>`}</code> element
                  to identify it as a navigation section to screen readers and
                  other assistive technologies. In addition, as pages likely
                  have more than one such navigation section, it’s advisable to
                  provide a descriptive <code>aria-label</code> for the{" "}
                  <code>{`<nav>`}</code> to reflect its purpose. For example, if
                  the pagination component is used to navigate between a set of
                  search results, an appropriate label could be
                  <code> aria-label="Search results pages"</code>.
                </tc.TutorialBlockText>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="/">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
                <tc.TutorialBlockTitle>
                  Disabled and active states
                </tc.TutorialBlockTitle>
                <tc.TutorialBlockText>
                  Pagination links are customizable for different circumstances.
                  Use <code>.disabled</code> for links that appear un-clickable
                  and <code>.active</code>
                  to indicate the current page.
                  <br />
                  <br />
                  While the <code>.disabled</code> class uses{" "}
                  <code>pointer-events: none</code> to try to disable the link
                  functionality of <code>{"<a>"}</code>s, that CSS property is
                  not yet standardized and doesn’t account for keyboard
                  navigation. As such, you should always add
                  <code>tabindex="-1"</code> on disabled links and use custom
                  JavaScript to fully disable their functionality.
                </tc.TutorialBlockText>
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a
                        className="page-link"
                        href="/"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        1
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="/">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </tc.TutorialBlock>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UIButtonsPage;
