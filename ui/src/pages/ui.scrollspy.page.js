import React, { Component } from "react";
import { TutorialComponents as tc } from "../components";

class UIScrollspyPage extends Component {
  render() {
    return (
      <div className="container pb-5">
        <tc.TutorialTitle>Bootstrap Scrollspy</tc.TutorialTitle>
        <div className="row p-0 m-0">
          <div className="col-12">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>Example in navbar</tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Scroll the area below the navbar and watch the active class
                change. The dropdown items will be highlighted as well.
              </tc.TutorialBlockText>
              <nav
                id="navbar-example2"
                className="navbar navbar-light bg-light px-3"
              >
                <a className="navbar-brand" href="/">
                  Navbar
                </a>
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a className="nav-link" href="#fat">
                      @fat
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#mdo">
                      @mdo
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
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#one">
                          one
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#two">
                          two
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#three">
                          three
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                tabIndex="0"
                style={{ height: "200px", overflow: "auto" }}
              >
                <h4 id="fat">@fat</h4>
                <p>
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Obcaecati eveniet excepturi blanditiis distinctio? Molestiae,
                  perspiciatis suscipit magni necessitatibus ad officiis dicta
                  iste doloribus, exercitationem enim iure! Blanditiis, et.
                  Sapiente, iure. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Laudantium rem cumque, libero quas,
                  dignissimos iure tempore debitis fugit iste similique saepe
                  obcaecati autem id beatae voluptas odit. Vero, officiis quis?
                </p>
                <h4 id="mdo">@mdo</h4>
                <p>
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Adipisci id hic molestiae corrupti repellat
                  qui sed. Placeat, cumque sunt quisquam qui facilis dicta fuga
                  dolor porro! Excepturi numquam sit impedit. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Itaque voluptate quos
                  iste modi quaerat, eius consequatur accusantium quo ipsa iure
                  suscipit saepe assumenda atque aut est, id omnis nostrum
                  deleniti?
                </p>
                <h4 id="one">one</h4>
                <p>
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Veniam et odio sequi odit non illo magni
                  aliquid incidunt, officia ullam ea doloribus autem laudantium
                  at quisquam molestiae cum, illum nesciunt. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Quaerat, ad nihil
                  quisquam distinctio sapiente, velit nulla voluptatem eaque
                  nesciunt nam aliquid. Suscipit temporibus unde velit
                  architecto ipsam perspiciatis voluptatum aut?
                </p>
                <h4 id="two">two</h4>
                <p>
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Quo eligendi tempore quibusdam minima
                  laudantium porro odio consequatur. Cupiditate, eius?
                  Asperiores eaque voluptas laboriosam quos temporibus placeat
                  nisi facilis dolorum neque. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Harum aperiam vitae voluptates
                  esse ex unde autem laboriosam, consequatur dolorem cum beatae.
                  Quae illo tempora velit mollitia facere sequi harum nulla?
                </p>
                <h4 id="three">three</h4>
                <p>
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsumLorem ipsumLorem ipsum dolor sit amet consectetur
                  adipisicing elit. Exercitationem numquam, ullam ut facere
                  expedita quia! Dignissimos sint necessitatibus animi, modi
                  placeat eos voluptatibus dolore quasi quod voluptate deleniti
                  delectus fuga! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ex at alias, eius reprehenderit amet quasi
                  magni consectetur aliquam dolore nemo in facilis architecto
                  assumenda magnam minima nihil exercitationem rerum! Ullam.
                </p>
              </div>
            </tc.TutorialBlock>
          </div>
          <div className="col-6">
            <tc.TutorialBlock>
              <tc.TutorialBlockTitle>
                Example with nested nav
              </tc.TutorialBlockTitle>
              <tc.TutorialBlockText>
                Scrollspy also works with nested <code>.nav</code>s. If a nested{" "}
                <code>.nav</code> is
                <code>.active</code>, its parents will also be{" "}
                <code>.active</code>. Scroll the area next to the navbar and
                watch the active class change.
              </tc.TutorialBlockText>
              <div className="row">
                <nav
                  id="navbar-example3"
                  className="navbar navbar-light bg-light"
                >
                  <a className="navbar-brand" href="/">
                    Navbar
                  </a>
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link" href="#item-1">
                      Item 1
                    </a>
                    <nav className="nav nav-pills flex-column">
                      <a className="nav-link ms-3 my-1" href="#item-1-1">
                        Item 1-1
                      </a>
                      <a className="nav-link ms-3 my-1" href="#item-1-2">
                        Item 1-2
                      </a>
                    </nav>
                    <a className="nav-link" href="#item-2">
                      Item 2
                    </a>
                    <a className="nav-link" href="#item-3">
                      Item 3
                    </a>
                    <nav className="nav nav-pills flex-column">
                      <a className="nav-link ms-3 my-1" href="#item-3-1">
                        Item 3-1
                      </a>
                      <a className="nav-link ms-3 my-1" href="#item-3-2">
                        Item 3-2
                      </a>
                    </nav>
                  </nav>
                </nav>

                <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example3"
                  data-bs-offset="0"
                  tabindex="0"
                  style={{
                    height: "150px",
                    overflow: "auto",
                  }}
                >
                  <h4 id="item-1">Item 1</h4>
                  <p>
                    Placeholder content for the scrollspy example. This one
                    relates to item 1. Takes you miles high, so high, 'cause
                    she’s got that one international smile. There's a stranger
                    in my bed, there's a pounding in my head. Oh, no. In another
                    life I would make you stay. ‘Cause I, I’m capable of
                    anything. Suiting up for my crowning battle. Used to steal
                    your parents' liquor and climb to the roof. Tone, tan fit
                    and ready, turn it up cause its gettin' heavy. Her love is
                    like a drug. I guess that I forgot I had a choice.
                  </p>
                  <h5 id="item-1-1">Item 1-1</h5>
                  <p>
                    Placeholder content for the scrollspy example. This one
                    relates to the item 1-1. You got the finest architecture.
                    Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we
                    got it on lock. Never planned that one day I'd be losing
                    you. She eats your heart out. Your kiss is cosmic, every
                    move is magic. I mean the ones, I mean like she's the one.
                    Greetings loved ones let's take a journey. Just own the
                    night like the 4th of July! But you'd rather get wasted.
                  </p>
                  <h5 id="item-1-2">Item 1-2</h5>
                  <p>
                    Placeholder content for the scrollspy example. This one
                    relates to the item 1-2. Her love is like a drug. All my
                    girls vintage Chanel baby. Got a motel and built a fort out
                    of sheets. 'Cause she's the muse and the artist. (This is
                    how we do) So you wanna play with magic. So just be sure
                    before you give it all to me. I'm walking, I'm walking on
                    air (tonight). Skip the talk, heard it all, time to walk the
                    walk. Catch her if you can. Stinging like a bee I earned my
                    stripes.
                  </p>
                  <h4 id="item-2">Item 2</h4>
                  <p>
                    Placeholder content for the scrollspy example. This one
                    relates to item 2. Don't need apologies. There is no fear
                    now, let go and just be free, I will love you
                    unconditionally. Last Friday night. Don't be a shy kinda guy
                    I'll bet it's beautiful. Summer after high school when we
                    first met. 'Cause she's the muse and the artist. What? Wait.
                    No, no, no, no. Thought that I was the exception.
                  </p>
                  <h4 id="item-3">Item 3</h4>
                  <p>
                    Placeholder content for the scrollspy example. This one
                    relates to item 3. Word on the street, you got somethin' to
                    show me, me. All this money can't buy me a time machine.
                    Make it like your birthday everyday. So we hit the
                    boulevard. You make me feel like I'm livin' a teenage dream,
                    the way you turn me on Skip the talk, heard it all, time to
                    walk the walk. Word on the street, you got somethin' to show
                    me, me. It's no big deal, it's no big deal, it's no big
                    deal.
                  </p>
                  <h5 id="item-3-1">Item 3-1</h5>
                  <p>
                    Placeholder content for the scrollspy example. This one
                    relates to item 3-1. Baby do you dare to do this? This is no
                    big deal. Yeah, you're lucky if you're on her plane. Just
                    own the night like the 4th of July! Standing on the
                    frontline when the bombs start to fall. So just be sure
                    before you give it all to me.
                  </p>
                  <h5 id="item-3-2">Item 3-2</h5>
                  <p>
                    Placeholder content for the scrollspy example. This one
                    relates to item 3-2. You're original, cannot be replaced.
                    All night they're playing, your song. California girls we're
                    undeniable. Like a bird without a cage. There is no fear
                    now, let go and just be free, I will love you
                    unconditionally. I can see the writing on the wall. You
                    could travel the world but nothing comes close to the golden
                    coast.
                  </p>
                </div>
              </div>
            </tc.TutorialBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default UIScrollspyPage;
