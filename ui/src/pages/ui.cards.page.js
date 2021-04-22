import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UICardsPage extends Component {
  render() {
    return (
      <div className="container p-0">
        <tc.TutorialTitle>Bootstrap Cards</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Simple Card</tc.TutorialBlockTitle>
              <div className="card bg-dark">
                <div className="card-body">
                  This is some text within a card body.
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Titles, text, and links
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Card titles are used by adding <code>.card-title</code> to a{" "}
                <code>{`<h*>`}</code> tag. In the same way, links are added and
                placed next to each other by adding <code>.card-link</code> to
                an <code>{`<a>`}</code> tag. Subtitles are used by adding a
                <code>.card-subtitle</code> to a <code>{`<h*>`}</code> tag. If
                the <code>.card-title</code> and the <code>.card-subtitle</code>{" "}
                items are placed in a<code>.card-body</code> item, the card
                title and subtitle are aligned nicely.
              </tc.TutorialBlockText>
              <div className="card bg-dark">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-4">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Images</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                <code>.card-img-top</code> places an image to the top of the
                card. With <code>.card-text</code>, text can be added to the
                card. Text within <code>.card-text</code> can also be styled
                with the standard HTML tags.
              </tc.TutorialBlockText>
              <div className="card bg-dark">
                <img
                alt=""
                  src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top img-fluid"
                  style={{
                    height: "20vw",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-4">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Images</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                For footer image add image end of card and add to classlist{" "}
                <code>card-img-bottom</code>
              </tc.TutorialBlockText>
              <div className="card bg-dark">
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <img
                alt=""
                  src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className="card-img-bottom img-fluid"
                  style={{
                    height: "20vw",
                    objectFit: "cover",
                  }}
                />
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-4">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Image overlays</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Turn an image into a card background and overlay your card’s
                text. Depending on the image, you may or may not need additional
                styles or utilities.
              </tc.TutorialBlockText>
              <div className="card bg-dark text-white">
                <img
                alt=""
                  src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className="card-img-bottom img-fluid"
                  style={{
                    height: "20vw",
                    objectFit: "cover",
                  }}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-4">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>List groups</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Create lists of content in a card with a flush list group.
              </tc.TutorialBlockText>
              <div className="card bg-dark my-2">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light">
                    An item
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    A second item
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    A third item
                  </li>
                </ul>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-4">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                List groups with header
              </tc.TutorialBlockTitle>
              <div className="card bg-dark my-2">
                <div className="card-header">card header</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-primary text-light">
                    An item
                  </li>
                  <li className="list-group-item bg-danger text-light">
                    A second item
                  </li>
                  <li className="list-group-item bg-warning text-light">
                    A third item
                  </li>
                </ul>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-4">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                List groups with footer
              </tc.TutorialBlockTitle>
              <div className="card bg-dark my-2">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-danger">An item</li>
                  <li className="list-group-item bg-warning">A second item</li>
                  <li className="list-group-item bg-success">A third item</li>
                </ul>
                <div className="card-footer">Card footer</div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Kitchen sink</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Mix and match multiple content types to create the card you
                need, or throw everything in there. Shown below are image
                styles, blocks, text styles, and a list group—all wrapped in a
                fixed-width card.
              </tc.TutorialBlockText>
              <div className="card bg-dark">
                <img
                alt=""
                  src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top img-fluid"
                  style={{
                    height: "20vw",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light">
                    An item
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    A second item
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    A third item
                  </li>
                </ul>
                <div className="card-body">
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Kitchen sink with footer image
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Mix and match multiple content types to create the card you
                need, or throw everything in there. Shown below are image
                styles, blocks, text styles, and a list group—all wrapped in a
                fixed-width card.
              </tc.TutorialBlockText>
              <div className="card bg-dark">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-dark text-light">
                    An item
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    A second item
                  </li>
                  <li className="list-group-item bg-dark text-light">
                    A third item
                  </li>
                </ul>
                <div className="card-body">
                  <a href="/" className="card-link">
                    Card link
                  </a>
                  <a href="/" className="card-link">
                    Another link
                  </a>
                </div>
                <img
                alt=""
                  src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  className="card-img-bottom img-fluid"
                  style={{
                    height: "20vw",
                    objectFit: "cover",
                  }}
                />
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Header</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add an optional header and/or footer within a card.
              </tc.TutorialBlockText>
              <div className="card bg-dark">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Footer</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add an optional header and/or footer within a card.
              </tc.TutorialBlockText>
              <div className="card bg-dark text-center">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Navigation</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add some navigation to a card’s header (or block) with
                Bootstrap’s nav components.
              </tc.TutorialBlockText>
              <div className="card bg-dark text-center my-2">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link bg-dark text-light border-secondary border-bottom-0 active"
                        aria-current="true"
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
                      <a
                        className="nav-link disabled"
                        href="/"
                        tabIndex="-1"
                       
                      >
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div className="card bg-dark text-center my-2">
                <div className="card-header">
                  <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                      <a className="nav-link active" href="/">
                        Active
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
                        tabIndex="-1"
                       
                      >
                        Disabled
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12 offset-0">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Horizontal</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Using a combination of grid and utility classes, cards can be
                made horizontal in a mobile-friendly and responsive way. In the
                example below, we remove the grid gutters with <code>.g-0</code>{" "}
                and use
                <code>.col-md-*</code> classes to make the card horizontal at
                the <code>md</code> breakpoint. Further adjustments may be
                needed depending on your card content.
              </tc.TutorialBlockText>
              <div className="card bg-dark my-2">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                    alt=""
                      src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      className="img-fluid"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Background and color
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use text color and background utilities to change the appearance
                of a card. Header
              </tc.TutorialBlockText>
              <div className="row">
                <div className="col-6">
                  <div className="card text-white bg-primary m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Primary card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-white bg-secondary m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Secondary card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-white bg-success m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Success card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-white bg-danger m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Danger card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-dark bg-warning m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Warning card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-dark bg-info m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Info card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-dark bg-light m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Light card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-white bg-dark m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Dark card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Border</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use border utilities to change just the{" "}
                <code>border-color</code> of a card. Note that you can put{" "}
                <code>{`.text-{color}`}</code> classes on the parent
                <code> .card </code>
                or a subset of the card’s contents as shown below.
              </tc.TutorialBlockText>
              <div className="row">
                <div className="col-6">
                  <div className="card bg-transparent text-primary border-primary m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Primary card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card text-secondary border-secondary bg-transparent m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Secondary card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent text-success border-success m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Success card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent text-danger border-danger m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Danger card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent text-warning border-warning m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Warning card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent text-info border-info m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Info card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent text-light border-light m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Light card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-transparent text-dark border-dark m-2">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                      <h5 className="card-title">Dark card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Card groups</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use card groups to render cards as a single, attached element
                with equal width and height columns. Card groups start off
                stacked and use <code>display: flex;</code> to become attached
                with uniform dimensions starting at the <code>sm </code>
                breakpoint.
              </tc.TutorialBlockText>
              <div className="card-group">
                <div className="card bg-dark">
                  <img
                    src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                <div className="card bg-dark">
                  <img
                    src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Grid cards</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Use the Bootstrap grid system and its .row-cols classes to
                control how many grid columns (wrapped around your cards) you
                show per row. For example, here’s <code>.row-cols-1</code> laying out the
                cards on one column, and <code>.row-cols-md-2</code> splitting four cards to
                equal width across multiple rows, from the medium breakpoint up.
              </tc.TutorialBlockText>
              <div className="row p-0 m-0 row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card bg-dark">
                    <img
                      src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"
                      className="card-img-top img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "15vw",
                      }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-dark">
                    <img
                      src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"
                      className="card-img-top img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "15vw",
                      }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-dark">
                    <img
                      src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"
                      className="card-img-top img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "15vw",
                      }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-dark">
                    <img
                      src="https://images.unsplash.com/photo-1497377701144-65a4a020f4c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"
                      className="card-img-top img-fluid"
                      style={{
                        objectFit: "cover",
                        height: "15vw",
                      }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UICardsPage;
