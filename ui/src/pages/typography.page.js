import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class TypographyPage extends Component {
  render() {
    return (
      <div className="container b-5">
        <tc.TutorialTitle>Bootstrap Typography</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Text truncation</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                For longer content, you can add a <code>.text-truncate </code>
                class to truncate the text with an ellipsis. <b>Requires</b>
                <code> display:inline-block</code> or{" "}
                <code>display: block</code>.
              </tc.TutorialBlockText>
              <div className="row">
                <div className="col-2 text-truncate">
                  Praeterea iter est quasdam res quas ex communi.
                </div>
              </div>

              <span
                className="d-inline-block text-truncate"
                style={{ maxWidth: "150px" }}
              >
                Praeterea iter est quasdam res quas ex communi.
              </span>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Text alignment</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Easily realign text to components with text alignment classes.
                For start, end, and center alignment, responsive classes are
                available that use the same viewport width breakpoints as the
                grid system.
              </tc.TutorialBlockText>
              <p className="text-start">
                Start aligned text on all viewport sizes.
              </p>
              <p className="text-center">
                Center aligned text on all viewport sizes.
              </p>
              <p className="text-end">
                End aligned text on all viewport sizes.
              </p>

              <p className="text-sm-start">
                Start aligned text on viewports sized SM (small) or wider.
              </p>
              <p className="text-md-start">
                Start aligned text on viewports sized MD (medium) or wider.
              </p>
              <p className="text-lg-start">
                Start aligned text on viewports sized LG (large) or wider.
              </p>
              <p className="text-xl-start">
                Start aligned text on viewports sized XL (extra-large) or wider.
              </p>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Text wrapping and overflow
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Wrap text with a <code>.text-wrap</code> class.
              </tc.TutorialBlockText>
              <div
                className="badge bg-primary text-wrap"
                style={{ width: "6rem" }}
              >
                This text should wrap.
              </div>
              <tc.TutorialBlockText>
                Prevent text from wrapping with a .text-nowrap class.
              </tc.TutorialBlockText>
              <div className="text-nowrap bg-primary" style={{ width: "8rem" }}>
                This text should overflow the parent.
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Word break</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Prevent long strings of text from breaking your components'
                layout by using <code> .text-break</code> to set
                <code> word-wrap: break-word</code> and
                <code> word-break: break-word</code>. We use
                <code> word-wrap</code> instead of the more common
                <code> overflow-wrap</code> for wider browser support, and add
                the deprecated <code>word-break: break-word</code> to avoid
                issues with flex containers.
              </tc.TutorialBlockText>
              <p className="text-break">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                odit repudiandae labore expedita quae, totam voluptatibus amet
                cumque accusantium ut laborum dignissimos, qui omnis
                reprehenderit autem distinctio ex animi dicta!
              </p>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Text transform</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Transform text in components with text capitalization classes.
              </tc.TutorialBlockText>
              <p className="text-lowercase">Lowercased text.</p>
              <p className="text-uppercase">Uppercased text.</p>
              <p className="text-capitalize">CapiTaliZed text.</p>
              <tc.TutorialBlockText>
                Note how <code>.text-capitalize</code> only changes the first
                letter of each word, leaving the case of any other letters
                unaffected.
              </tc.TutorialBlockText>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Font size</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Quickly change the <code>font-size</code> of text. While our
                heading classes (e.g., <code>.h1</code>–<code>.h6</code>) apply{" "}
                <code>font-size</code>, <code>font-weight</code>, and{" "}
                <code>line-height</code>, these utilities only apply{" "}
                <code>font-size</code>. Sizing for these utilities matches
                HTML’s heading elements, so as the number increases, their size
                decreases.
              </tc.TutorialBlockText>
              <p className="fs-1">.fs-1 text</p>
              <p className="fs-2">.fs-2 text</p>
              <p className="fs-3">.fs-3 text</p>
              <p className="fs-4">.fs-4 text</p>
              <p className="fs-5">.fs-5 text</p>
              <p className="fs-6">.fs-6 text</p>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Font weight and italics
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Quickly change the <code>font-weight</code> or{" "}
                <code>font-style</code> of text with these utilities.{" "}
                <code>font-style</code> utilities are abbreviated as{" "}
                <code>.fst-*</code> and
                <code> font-weight </code> utilities are abbreviated as{" "}
                <code>.fw-*</code>.
              </tc.TutorialBlockText>
              <p className="fw-bold">Bold text.</p>
              <p className="fw-bolder">
                Bolder weight text (relative to the parent element).
              </p>
              <p className="fw-normal">Normal weight text.</p>
              <p className="fw-light">Light weight text.</p>
              <p className="fw-lighter">
                Lighter weight text (relative to the parent element).
              </p>
              <p className="fst-italic">Italic text.</p>
              <p className="fst-normal">Text with normal font style</p>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Line height</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Change the line height with <code>.lh-*</code> utilities.
              </tc.TutorialBlockText>
              <p className="lh-1">
                Some placeholder content to show off the line height utilities.
                Happy birthday. You could've been the greatest. She ride me like
                a roller coaster. I messed around and got addicted. You just
                gotta ignite the light and let it shine! I'm intrigued, for a
                peek, heard it's fascinating. Catch her if you can. I should've
                told you what you meant to me 'Cause now I pay the price. Do you
                ever feel, feel so paper thin.
              </p>
              <p className="lh-sm">
                But you better choose carefully. Yo, shout out to all you kids,
                buying bottle service, with your rent money. She's sweet as pie
                but if you break her heart. Just own the night like the 4th of
                July! In another life I would be your girl. Playing ping pong
                all night long, everything's all neon and hazy. Shorty so bad,
                I’m sprung and I don’t care.
              </p>
              <p className="lh-base">
                I can feel a phoenix inside of me. Maybe a reason why all the
                doors are closed. We go higher and higher. Passport stamps,
                she's cosmopolitan. Someone said you had your tattoo removed.
                All my girls vintage Chanel baby. Someone said you had your
                tattoo removed.
              </p>
              <p className="lh-lg">
                But I will get there. This is real so take a chance and don't
                ever look back, don't ever look back. You could travel the world
                but nothing comes close to the golden coast. Of anything and
                everything. Venice beach and Palm Springs, summertime is
                everything. Do you ever feel already buried deep six feet under?
                It's time to bring out the big balloons. So cover your eyes, I
                have a surprise. So I don't have to say you were the one that
                got away.
              </p>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Monospace</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Change a selection to our monospace font stack with{" "}
                <code>.font-monospace</code>.
              </tc.TutorialBlockText>
              <p className="font-monospace">This is in monospace</p>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Reset color</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Reset a text or link’s color with <code>.text-reset</code>, so
                that it inherits the color from its parent.
              </tc.TutorialBlockText>
              <p className="text-muted">
                Muted text with a&nbsp;
                <a href="/" className="text-reset">
                  reset link
                </a>
                .
              </p>
            </tc.TutorialBlock>
          </div>
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Text decoration</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Decorate text in components with text decoration classes.
              </tc.TutorialBlockText>
              <p className="text-decoration-underline">
                This text has a line underneath it.
              </p>
              <p className="text-decoration-line-through">
                This text has a line going through it.
              </p>
              <a href="/" className="text-decoration-none">
                This link has its text decoration removed
              </a>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default TypographyPage;
