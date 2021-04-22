import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIModalsPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Modals</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Modal components</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Below is a static modal example (meaning its{" "}
                <code>position</code> and
                <code>display</code> have been overridden). Included are the
                modal header, modal body (required for <code>padding</code>),
                and modal footer (optional). We ask that you include modal
                headers with dismiss actions whenever possible, or provide
                another explicit dismiss action.
              </tc.TutorialBlockText>
              <div className="modal" id="m" tabIndex="-1">
                <div className="modal-dialog">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#m"
              >
                Launch demo modal
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Static backdrop</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                When backdrop is set to static, the modal will not close when
                clicking outside it. Click the button below to try it.
              </tc.TutorialBlockText>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Launch static backdrop modal
              </button>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Scrolling long content
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                When modals become too long for the user’s viewport or device,
                they scroll independent of the page itself. Try the demo below
                to see what we mean.
              </tc.TutorialBlockText>
              <div className="modal" id="m2" tabIndex="-1">
                <div className="modal-dialog">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut veniam in ex fuga asperiores maxime iusto temporibus
                        quia atque. Maiores laborum nam quae neque sed officia
                        omnis numquam doloribus tempore! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Rem ipsam sunt quam
                        expedita odit sequi quas fugit debitis accusamus earum
                        vero, blanditiis iste quos a ut ipsum ad vel iusto!
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ex aperiam facilis error consectetur molestiae,
                        doloribus neque ratione in pariatur perferendis vitae
                        suscipit. Ratione perspiciatis velit quod cupiditate
                        officia laboriosam obcaecati? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Rerum tempore, sunt
                        quibusdam ab consequatur similique, nulla odit
                        praesentium iusto consequuntur temporibus at quis
                        nesciunt architecto aperiam quo suscipit earum. Magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium temporibus asperiores necessitatibus libero
                        provident recusandae odio. Similique deleniti tenetur
                        beatae perferendis maxime dolorum vero numquam fugit et,
                        corrupti autem libero! Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Ex rerum totam sapiente
                        recusandae illo qui facere iste fugit voluptatibus nemo
                        ea, dolorum, consequatur debitis asperiores cupiditate
                        quos blanditiis nam! Dolore. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Itaque, nemo error
                        quibusdam eum, aliquam minima totam sapiente laudantium
                        ratione repudiandae aperiam, ullam possimus corrupti
                        laboriosam modi odio doloribus et mollitia. Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Sint
                        expedita in repellat nesciunt asperiores at fuga dolorem
                        error. Id nisi exercitationem laborum, commodi dolorum
                        excepturi perferendis corrupti officia facere minus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid incidunt earum tempora eaque, beatae
                        accusantium est nisi, a dignissimos cumque dolore magni
                        unde quos optio totam explicabo qui aut. Reprehenderit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, pariatur officia delectus dolorem illo eaque optio
                        nulla? Sed cupiditate repudiandae libero odio
                        voluptatibus praesentium sint tempora iusto
                        reprehenderit. Excepturi, eos! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Accusantium aliquid
                        ab ea minus earum minima quod, nihil quae. Tempore
                        cupiditate id reiciendis obcaecati quibusdam
                        necessitatibus unde dicta hic molestias dignissimos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero architecto ex officia similique odit tempore
                        dolorum natus laudantium nulla! Illo iusto facilis sint
                        dolorem laudantium ex veritatis tempora? Quisquam, id?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat dolorem ullam adipisci, veniam eius est minima
                        quod. Id laborum nobis dolorem dignissimos suscipit
                        velit laudantium autem. Maiores suscipit sit
                        perferendis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Possimus quod illum cum porro eveniet
                        esse ipsam, rem enim ducimus labore, dolore consequuntur
                        consectetur ad accusantium at laudantium, hic temporibus
                        quaerat? Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Iusto recusandae officia excepturi
                        beatae ducimus, eaque architecto quam perspiciatis.
                        Quaerat doloremque molestias veniam provident, quidem ea
                        est sequi aperiam fugiat excepturi?
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#m2"
              >
                Launch demo modal
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Scrollable modal content
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                You can also create a scrollable modal that allows scroll the
                modal body by adding .modal-dialog-scrollable to .modal-dialog.
              </tc.TutorialBlockText>
              <div className="modal" id="m3" tabIndex="-1">
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut veniam in ex fuga asperiores maxime iusto temporibus
                        quia atque. Maiores laborum nam quae neque sed officia
                        omnis numquam doloribus tempore! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Rem ipsam sunt quam
                        expedita odit sequi quas fugit debitis accusamus earum
                        vero, blanditiis iste quos a ut ipsum ad vel iusto!
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ex aperiam facilis error consectetur molestiae,
                        doloribus neque ratione in pariatur perferendis vitae
                        suscipit. Ratione perspiciatis velit quod cupiditate
                        officia laboriosam obcaecati? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Rerum tempore, sunt
                        quibusdam ab consequatur similique, nulla odit
                        praesentium iusto consequuntur temporibus at quis
                        nesciunt architecto aperiam quo suscipit earum. Magnam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium temporibus asperiores necessitatibus libero
                        provident recusandae odio. Similique deleniti tenetur
                        beatae perferendis maxime dolorum vero numquam fugit et,
                        corrupti autem libero! Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Ex rerum totam sapiente
                        recusandae illo qui facere iste fugit voluptatibus nemo
                        ea, dolorum, consequatur debitis asperiores cupiditate
                        quos blanditiis nam! Dolore. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Itaque, nemo error
                        quibusdam eum, aliquam minima totam sapiente laudantium
                        ratione repudiandae aperiam, ullam possimus corrupti
                        laboriosam modi odio doloribus et mollitia. Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Sint
                        expedita in repellat nesciunt asperiores at fuga dolorem
                        error. Id nisi exercitationem laborum, commodi dolorum
                        excepturi perferendis corrupti officia facere minus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid incidunt earum tempora eaque, beatae
                        accusantium est nisi, a dignissimos cumque dolore magni
                        unde quos optio totam explicabo qui aut. Reprehenderit!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, pariatur officia delectus dolorem illo eaque optio
                        nulla? Sed cupiditate repudiandae libero odio
                        voluptatibus praesentium sint tempora iusto
                        reprehenderit. Excepturi, eos! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Accusantium aliquid
                        ab ea minus earum minima quod, nihil quae. Tempore
                        cupiditate id reiciendis obcaecati quibusdam
                        necessitatibus unde dicta hic molestias dignissimos.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero architecto ex officia similique odit tempore
                        dolorum natus laudantium nulla! Illo iusto facilis sint
                        dolorem laudantium ex veritatis tempora? Quisquam, id?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat dolorem ullam adipisci, veniam eius est minima
                        quod. Id laborum nobis dolorem dignissimos suscipit
                        velit laudantium autem. Maiores suscipit sit
                        perferendis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Possimus quod illum cum porro eveniet
                        esse ipsam, rem enim ducimus labore, dolore consequuntur
                        consectetur ad accusantium at laudantium, hic temporibus
                        quaerat? Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Iusto recusandae officia excepturi
                        beatae ducimus, eaque architecto quam perspiciatis.
                        Quaerat doloremque molestias veniam provident, quidem ea
                        est sequi aperiam fugiat excepturi?
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#m3"
              >
                Launch demo modal
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Vertically centered</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Add <code>.modal-dialog-centered</code> to{" "}
                <code>.modal-dialog</code> to vertically center the modal.
              </tc.TutorialBlockText>
              <div className="modal" id="m4" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut veniam in ex fuga asperiores maxime iusto temporibus
                        quia atque. Maiores laborum nam quae neque sed officia
                        omnis numquam doloribus tempore! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Rem ipsam sunt quam
                        expedita odit sequi quas fugit debitis accusamus earum
                        vero, blanditiis iste quos a ut ipsum ad vel iusto!
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ex aperiam facilis error consectetur molestiae,
                        doloribus neque ratione in pariatur perferendis vitae
                        suscipit. Ratione perspiciatis velit quod cupiditate
                        officia laboriosam obcaecati?
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#m4"
              >
                Launch demo modal
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Tooltips and popovers
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Tooltips and popovers can be placed within modals as needed.
                When modals are closed, any tooltips and popovers within are
                also automatically dismissed.
              </tc.TutorialBlockText>
              <div className="modal" id="m5" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <h5>Popover in a modal</h5>
                      <p>
                        This{" "}
                        <a
                          href="/"
                          role="button"
                          className="btn btn-secondary popover-test"
                          title="Popover title"
                          data-bs-content="Popover body content is set in this attribute."
                        >
                          button
                        </a>{" "}
                        triggers a popover on click.
                      </p>
                      <hr />
                      <h5>Tooltips in a modal</h5>
                      <p>
                        <a href="/" className="tooltip-test" title="Tooltip">
                          This link
                        </a>{" "}
                        and{" "}
                        <a href="/" className="tooltip-test" title="Tooltip">
                          that link
                        </a>{" "}
                        have tooltips on hover.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#m5"
              >
                Launch demo modal
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Using the grid</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Utilize the Bootstrap grid system within a modal by nesting
                <code>.container-fluid</code> within the{" "}
                <code>.modal-body</code>. Then, use the normal grid system
                classes as you would anywhere else.
              </tc.TutorialBlockText>
              <div className="modal" id="m6" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">.col-md-4</div>
                          <div className="col-md-4 ms-auto">
                            .col-md-4 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 ms-auto">
                            .col-md-3 .ms-auto
                          </div>
                          <div className="col-md-2 ms-auto">
                            .col-md-2 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 ms-auto">
                            .col-md-6 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-9">
                            Level 1: .col-sm-9
                            <div className="row">
                              <div className="col-8 col-sm-6">
                                Level 2: .col-8 .col-sm-6
                              </div>
                              <div className="col-4 col-sm-6">
                                Level 2: .col-4 .col-sm-6
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#m6"
              >
                Launch demo modal
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Optional sizes</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Modals have three optional sizes, available via modifier classes
                to be placed on a <code>.modal-dialog</code>. These sizes kick
                in at certain breakpoints to avoid horizontal scrollbars on
                narrower viewports.
              </tc.TutorialBlockText>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Class</th>
                    <th>Modal max-width</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Small</td>
                    <td>
                      <code>.modal-sm</code>
                    </td>
                    <td>
                      <code>300px</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Default</td>
                    <td className="text-muted">None</td>
                    <td>
                      <code>500px</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Large</td>
                    <td>
                      <code>.modal-lg</code>
                    </td>
                    <td>
                      <code>800px</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Extra large</td>
                    <td>
                      <code>.modal-xl</code>
                    </td>
                    <td>
                      <code>1140px</code>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="modal" id="m7" tabIndex="-1">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">.col-md-4</div>
                          <div className="col-md-4 ms-auto">
                            .col-md-4 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 ms-auto">
                            .col-md-3 .ms-auto
                          </div>
                          <div className="col-md-2 ms-auto">
                            .col-md-2 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 ms-auto">
                            .col-md-6 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-9">
                            Level 1: .col-sm-9
                            <div className="row">
                              <div className="col-8 col-sm-6">
                                Level 2: .col-8 .col-sm-6
                              </div>
                              <div className="col-4 col-sm-6">
                                Level 2: .col-4 .col-sm-6
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-bs-toggle="modal"
                data-bs-target="#m7"
              >
                Launch Xlarge modal
              </button>
              <div className="modal" id="m8" tabIndex="-1">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">.col-md-4</div>
                          <div className="col-md-4 ms-auto">
                            .col-md-4 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 ms-auto">
                            .col-md-3 .ms-auto
                          </div>
                          <div className="col-md-2 ms-auto">
                            .col-md-2 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 ms-auto">
                            .col-md-6 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-9">
                            Level 1: .col-sm-9
                            <div className="row">
                              <div className="col-8 col-sm-6">
                                Level 2: .col-8 .col-sm-6
                              </div>
                              <div className="col-4 col-sm-6">
                                Level 2: .col-4 .col-sm-6
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-bs-toggle="modal"
                data-bs-target="#m8"
              >
                Launch large modal
              </button>
              <div className="modal" id="m9" tabIndex="-1">
                <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">.col-md-4</div>
                          <div className="col-md-4 ms-auto">
                            .col-md-4 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 ms-auto">
                            .col-md-3 .ms-auto
                          </div>
                          <div className="col-md-2 ms-auto">
                            .col-md-2 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 ms-auto">
                            .col-md-6 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-9">
                            Level 1: .col-sm-9
                            <div className="row">
                              <div className="col-8 col-sm-6">
                                Level 2: .col-8 .col-sm-6
                              </div>
                              <div className="col-4 col-sm-6">
                                Level 2: .col-4 .col-sm-6
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-bs-toggle="modal"
                data-bs-target="#m9"
              >
                Launch sm modal
              </button>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Fullscreen Modal</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on a <code>.modal-dialog</code>.</tc.TutorialBlockText>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.modal-fullscreen</code>
                    </td>
                    <td>Always</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.modal-fullscreen-sm-down</code>
                    </td>
                    <td>
                      Below <code>576px</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.modal-fullscreen-md-down</code>
                    </td>
                    <td>
                      Below <code>768px</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.modal-fullscreen-lg-down</code>
                    </td>
                    <td>
                      Below <code>992px</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.modal-fullscreen-xl-down</code>
                    </td>
                    <td>
                      Below <code>1200px</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.modal-fullscreen-xxl-down</code>
                    </td>
                    <td>
                      Below <code>1400px</code>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="col-12">
              <div className="modal fade" id="m10" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                  <div className="modal-content bg-dark">
                    <div className="modal-header">
                      <h5 className="modal-title">Modal title</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-4">.col-md-4</div>
                          <div className="col-md-4 ms-auto">
                            .col-md-4 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 ms-auto">
                            .col-md-3 .ms-auto
                          </div>
                          <div className="col-md-2 ms-auto">
                            .col-md-2 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 ms-auto">
                            .col-md-6 .ms-auto
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-9">
                            Level 1: .col-sm-9
                            <div className="row">
                              <div className="col-8 col-sm-6">
                                Level 2: .col-8 .col-sm-6
                              </div>
                              <div className="col-4 col-sm-6">
                                Level 2: .col-4 .col-sm-6
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-bs-toggle="modal"
                data-bs-target="#m10"
              >
                Launch sm modal
              </button>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIModalsPage;
