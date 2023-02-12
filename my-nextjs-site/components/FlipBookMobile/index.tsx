import React, { useRef, useEffect, useState, useCallback } from "react";
import Lottie from "react-lottie-player";
import Page from "@/components/FlipBook/Page";
import PageCover from "@/components/FlipBook/PageCover";
import HTMLFlipBook from "react-pageflip";
import lottieJson from "@/images/lottie/help.json";

function FlipBookMobile() {
  const pageFlipRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const onPage = useCallback((e: { data: React.SetStateAction<number> }) => {
    setPage(e.data);
  }, []);

  const flipBookStyle = {
    width: `200px`,
    height: "800px",
  };

  return (
    <div>
      {" "}
      <HTMLFlipBook
        ref={pageFlipRef}
        style={flipBookStyle}
        width={200}
        height={800}
        size="stretch"
        minWidth={300}
        maxWidth={1000}
        minHeight={800}
        maxHeight={1533}
        maxShadowOpacity={0.7}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
        startPage={1}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        clickEventForward={false}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={false}
        disableFlipByClick={false}
        onFlip={onPage}
      >
        <PageCover frontCover={true}>
          {`Le' Job Pamphlet`}
        </PageCover>
        <Page pageHeader={"List Of Projects"} number={1}>
          <div className="toc-container">
            <span>Pursuit</span>
            <span>Page 1</span>
          </div>
          <div className="toc-container">
            <span>Cognizant</span>
            <span>Page 2</span>
          </div>
          <div className="toc-container">
            <span>AutoZone</span>
            <span>Page 3</span>
          </div>
          <div className="toc-container">
            <span>MoneyCaptain Labs</span>
            <span>Page 4</span>
          </div>
        </Page>
        <Page number={2}>
          <div className="data-container">
            <div className="data-logo">
              <p>pursuit img here</p>
              {/* <LazyLoadImage
                alt={"pursuit"}
                height={50}
                src="data:image/png;base64,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"
                width={150}
              /> */}
            </div>
            <div className={"p-2"}>
              <span className="shimmer-fancy-letter fancy-letter">𝓞</span>nce
              upon a time, I mentored a group of prospective students interested
              in learning web fundamentals at a wonderful school called Pursuit.
            </div>

            <div className={"p-2"}>
              I mentored them in pair-programming, debugging, whiteboarding,
              Node.js and how to use shell terminals.
            </div>
            <div className={"p-2"}>
              Ultimately, they were able to build a command line game!
            </div>
            <div className={"p-2"}>
              They went on to add these skills to their toolboxes as they became
              successful web developers.
            </div>
          </div>
        </Page>
        <Page number={3}>
          <div className="data-container">
            <div className="data-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Cognizant_Logo"
                x="0px"
                y="0px"
                width="100%"
                height="auto"
                viewBox="0 0 820 189.56"
                enableBackground="new 0 0 820 189.56"
                xmlSpace="preserve"
              >
                <path
                  fill="#0033A1"
                  d="M469.219,114.094l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155h48.485v21.815h-81.749  L469.219,114.094z M435.418,16.295h24.783v22.429h-24.783V16.295z M435.082,46.217h24.785v90.146h-24.785V46.217z M135.318,91.019  c0.099-25.767,21.121-46.583,46.974-46.518c25.854,0.066,46.771,20.989,46.737,46.756c-0.032,25.765-21.001,46.638-46.855,46.638  c-12.465,0.018-24.42-4.922-33.217-13.722C140.16,115.372,135.25,103.438,135.318,91.019z M204.963,91.019  c0-12.801-10.132-23.453-22.79-23.453c-12.844,0-22.617,10.64-22.617,23.453c0,12.813,9.773,23.454,22.617,23.454  c12.658-0.02,22.796-10.653,22.796-23.454H204.963z M340.874,45.945h24.612v10.097c5.783-7.405,14.646-11.899,24.956-11.899  c21.354,0,34.198,13.702,34.198,36.957v54.991h-25.148V84.347c0-12.079-5.612-19.133-16.643-19.133  c-9.406,0-17.185,6.486-17.185,21.602v49.22h-24.771L340.874,45.945z M552.397,91.019c0-31.915,23.534-46.906,43.971-46.906  c11.766,0,20.986,4.32,26.951,10.641v-8.808h24.771v90.146h-24.771v-10.097c-5.965,7.03-15.557,11.9-27.311,11.9  C576.828,137.895,552.397,122.771,552.397,91.019z M624.031,90.84c0-13.344-9.768-24.163-23.155-24.163  c-13.75,0-24.239,10.275-24.239,24.163c0,13.885,10.489,24.335,24.239,24.335c13.401,0,23.167-10.998,23.167-24.335H624.031z   M658.111,45.945h24.605v10.097c5.791-7.405,14.652-11.899,24.965-11.899c21.346,0,34.191,13.702,34.191,36.957v54.991h-25.15  V84.347c0-12.079-5.574-19.133-16.64-19.133c-9.408,0-17.187,6.486-17.187,21.602v49.22h-24.771L658.111,45.945z M469.219,136.091  v-21.997l47.573-46.331h-46.855V45.945h80.144V68.12l-47.58,46.155 M108.879,90.234l-0.341,0.716  c-6.843,14.375-19.426,22.62-34.525,22.62c-21.893,0-39.016-17.243-39.016-39.253c0-22.571,17.005-39.586,39.56-39.586  c14.616,0,25.719,6.82,33.01,20.281l0.389,0.716l22.06-14.053l-0.371-0.618C118.186,21.61,97.588,10,74.557,10  C37.751,10,10,37.656,10,74.33c0,37.277,27.151,64.334,64.557,64.334c24.108,0,45.407-13.335,56.976-35.672l0.347-0.675  L108.879,90.234z M235.272,91.019c0-31.915,23.534-46.906,43.971-46.906c11.766,0,20.982,4.87,26.951,11.535v-9.702h24.771v87.64  c0,25.423-16.102,45.976-46.676,45.976c-22.976,0-39.797-11.906-47.066-25.966l21.893-12.257c4.7,9.374,13.005,15.325,25.143,15.325  c13.39,0,21.887-10.456,21.887-22.177v-8.492c-5.972,7.03-15.557,11.9-27.312,11.9C259.692,137.895,235.272,122.771,235.272,91.019z   M306.906,90.84c0-13.344-9.766-24.163-23.156-24.163c-13.749,0-24.238,10.275-24.238,24.163c0,13.885,10.489,24.335,24.238,24.335  C297.141,115.175,306.906,104.177,306.906,90.84z M802.908,68.12V45.945h-17.005V16.209h-24.771v29.736h-15.391V68.12h15.359v28.849  c0,29.391,9.406,39.122,38.173,39.122h3.617v-23.076c-15.197,0-17.005-2.165-17.005-16.226V68.12H802.908z M808.167,26.967  c-1.184,1.188-2.796,1.857-4.478,1.857c-1.681,0-3.293-0.669-4.477-1.857c-1.21-1.175-1.883-2.793-1.859-4.475  c0.006-2.851,1.933-5.343,4.698-6.076c2.765-0.733,5.679,0.476,7.105,2.947c1.427,2.472,1.011,5.59-1.014,7.604H808.167z   M799.844,18.666c-1.037,1.006-1.609,2.396-1.586,3.839c-0.023,1.448,0.545,2.842,1.574,3.864c1.019,1.023,2.405,1.599,3.852,1.599  s2.834-0.576,3.852-1.599c1.038-1.017,1.61-2.414,1.585-3.864c0.02-2.203-1.305-4.196-3.347-5.04  c-2.04-0.843-4.391-0.368-5.941,1.201H799.844z M803.56,19.018c0.642-0.033,1.284,0.051,1.895,0.247  c0.71,0.282,1.148,0.996,1.079,1.753c0.035,0.544-0.221,1.067-0.677,1.371c-0.308,0.177-0.649,0.29-1.002,0.333  c0.476,0.047,0.907,0.294,1.189,0.679c0.234,0.308,0.365,0.681,0.377,1.067v0.512c0,0.155,0,0.328,0,0.512  c0.002,0.121,0.02,0.243,0.055,0.358l0.044,0.087h-1.145c-0.004-0.023-0.004-0.045,0-0.068v-0.074v-0.222v-0.549  c0.083-0.608-0.168-1.214-0.657-1.586c-0.43-0.181-0.897-0.257-1.363-0.222h-0.965v2.722h-1.239v-6.919H803.56z M804.88,20.104  c-0.466-0.202-0.975-0.289-1.482-0.252h-1.046v2.505h1.109c0.395,0.019,0.787-0.033,1.164-0.154  c0.395-0.178,0.669-0.548,0.721-0.978C805.399,20.795,805.221,20.37,804.88,20.104z"
                />
              </svg>
            </div>
            <div className="p-2">
              <span className="shimmer-fancy-letter fancy-letter">𝖘</span>oon
              after Pursuit, I joined Cognizant as a Software Engineer.
            </div>
            <div className="p-2">
              At Cognizant I am responsible for building and maintaining web
              applications for one of the companys clients.
            </div>
            <div className="p-2">
              Im able to use many different technologies and frameworks to build
              a robust web application.
            </div>
            <div className="p-2">
              On a daily basis I use React.js, Next.js, CSS3, HTML 5, JavaScript
              ES6, Node.js, Express.js, TypeScript, Jest, Cypress, Oracle ATG
              Business Control Center, and many more!
            </div>
          </div>
        </Page>
        <Page number={4}>
          <div className="data-container">
            <div className="data-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="170"
                height="40"
                viewBox="0 0 238 29"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="#FFFFFE"
                    d="M103.5 3.842C106.56.745 110.913.356 112.9.356c5.406 0 9.05 2.436 8.894 6.172h15.707l1.534-2.673h10.357l-1.559 2.714h3.573l-.428.746c2.067-1.228 4.132-1.797 6.477-1.734 5.355.143 7.945 4.541 5.701 10.69-.098.27-.2.537-.305.8l11.06-8.056h-7.646l4.92-8.568h22.762l-3.506 6.108c1.616-.68 2.843-.915 4.591-.915 5.839 0 6.983 4.498 6.745 7.01l3.496-6.072h8.346c5.695-1.11 6.915 3.5 6.98 3.717 2.738-3.141 6.25-4.853 9.993-4.655 2.855.153 9.527 1.942 3.766 14.078-1.824 3.842-6.007 8.737-12.55 8.37-4.6-.26-6.424-3.48-6.071-6.54l-3.354 5.854-19.096-.005.739-1.283c-2.04 1.372-4.819 2.156-7.41 1.968-4.32-.314-5.425-2.496-5.991-4.417l-2.148 3.732h-22.802l1.001-1.73c-2.246 1.64-4.87 2.477-7.811 2.315-3.054-.168-5.913-1.659-6.26-5.417l-2.776 4.832h-5.06c-3.622 0-4.867-3.345-5.069-4.003-2.679 4.145-7.575 4.611-9.6 4.611-6.168 0-7.613-3.276-7.797-3.72l-1.788 3.104H0V.453h105.446l-1.946 3.39z"
                  />
                  <path
                    fill="#0A0B09"
                    d="M235.602 3.778v-.674h.455c.234 0 .478.045.478.319 0 .335-.254.355-.536.355h-.397zm0 .274h.383l.58.953h.37l-.624-.968c.32-.03.569-.207.569-.593 0-.437-.253-.623-.771-.623h-.828v2.184h.321v-.953zm-1.131-.147c0-.898.664-1.572 1.543-1.572.845 0 1.525.674 1.525 1.572 0 .913-.68 1.583-1.525 1.583-.879 0-1.543-.67-1.543-1.583zm1.543 1.902c1.027 0 1.911-.802 1.911-1.902 0-1.084-.884-1.885-1.911-1.885-1.05 0-1.93.8-1.93 1.885 0 1.1.88 1.902 1.93 1.902z"
                  />
                  <path
                    fill="#D52B1E"
                    d="M230.517 7.072c4.686.25 5.55 4.066 3.883 8.795-.317.9-.664 1.736-1.035 2.515h-9.584c-.603 1.512-.858 2.95-.096 3.1.818.161 1.668-.691 2.567-2.074h6.591c-2.86 5.271-6.68 7.477-10.98 7.248-5.11-.274-5.487-4.247-3.82-8.976 2.328-6.607 7.073-10.897 12.474-10.608zm-2.676 8.722c.805-1.684 1.14-2.858.128-3.042-.958-.175-2.075 1.107-3.166 3.042h3.038zM216.656 8.015c-3.162-.772-5.24 1.22-5.24 1.22l.692-1.224h-6.005l-10.335 17.953h6.598l6.21-10.811c.435-.766 1.027-1.646 1.913-1.457.79.169 1.025.894.765 1.38l-6.25 10.893h6.55l7.497-13.09c1.034-1.9-.667-4.443-2.395-4.864M193.006 16.15c-1.606 3.106-2.702 4.654-4.054 4.388-.984-.193-.616-1.594.353-3.47 1.354-2.62 2.807-4.527 4.017-4.316 1.132.197.653 1.523-.316 3.398zm2.435-9.078c-5.4-.289-10.472 4-12.8 10.608-1.667 4.729-.963 8.702 4.146 8.976 5.162.275 10.104-2.955 12.864-10.789 1.667-4.73.476-8.545-4.21-8.795z"
                  />
                  <path
                    fill="#D52B1E"
                    d="M187.662 8.519l3.81-6.639h-19.456l-3.274 5.7h9.573l-16.45 11.984-3.704 6.4h19.488l3.259-5.665h-9.148l15.902-11.78M155.16 16.075c-1.605 3.097-2.702 4.64-4.053 4.375-.985-.193-.617-1.59.352-3.46 1.354-2.612 2.806-4.514 4.016-4.304 1.133.197.653 1.519-.315 3.389zm2.435-9.053c-5.401-.289-10.473 3.988-12.8 10.577-1.666 4.716-.962 8.678 4.147 8.952 5.162.275 10.103-2.946 12.863-10.758 1.667-4.716.475-8.521-4.21-8.771zM142.393 13.159h3.588l2.953-5.157h-3.577l1.559-2.713h-7.05L131.42 20c-.77 1.408-.698 2.986.425 4.41.8 1.036 1.642 1.553 3.158 1.553H139l2.771-4.825h-3.017c-.232 0-.495.038-.593-.181-.05-.135-.08-.277-.019-.403l4.251-7.396M130.303 8.002l-6.708 11.927c-.548.986-1.116 1.266-1.986 1.095-1.086-.213-.632-1.044-.318-1.612l6.61-11.41h-6.573s-7.474 13.004-7.47 13.01c-1.332 2.443.417 4.89 4.745 5.43 2.461.307 7.622.012 10.053-4.15l.013-.01 8.176-14.28h-6.542M111.83 9.954l-2.844 4.959h-3.463l3.116-5.435c.41-.72 1.205-1.357 2.454-1.237 1.046.1 1.384.635.736 1.713zm2.776-8.064c-2.867-.358-8.959 0-11.63 5.082L92.068 25.954h7.109l3.042-5.3h3.457l-3.045 5.3h7.055l10.049-17.435c1.672-3.073.062-5.98-5.13-6.629z"
                  />
                  <path
                    fill="#F37100"
                    d="M101.957 1.887L88.13 25.952h.817l13.823-24.065h-.812zm-5 0L83.134 25.952h1.689L98.65 1.887h-1.693zm-3.017 0h-2.87L77.24 25.952h2.866l4.985-8.65 8.85-15.415zm-9.859 0L70.248 25.952h4.634L88.728 1.887h-4.647zm-8.975 0L61.277 25.952h7.281L82.393 1.887h-7.287zm-11.046 0L50.232 25.952h9.635L73.702 1.887H64.06zm-12.849 0l-13.84 24.065h11.705l13.83-24.065H51.21zm-49.822 0v24.065h35.044L50.257 1.887H1.389z"
                  />
                </g>
              </svg>
            </div>
            <div className="p-2">
              <span className="shimmer-fancy-letter fancy-letter">𝓞</span>ne
              project Im really excited about is AutoZone.
            </div>
            <div className="p-2">
              Ive been a member of the AutoZone Dev team since 2018!
            </div>
            <div className="p-2">
              We migrated this amazing e-commerce site from an older stack to a
              new blazing fast modernized stack.
            </div>
            <div className="p-2">
              We use an agile scrum methodology to get work done efficiently.{" "}
            </div>
            <div className="p-2">
              We use many technologies here as the giant e-commerce site serves
              millions of people a year, generates billions in revenue and
              supports 6,767 stores!
            </div>
          </div>
        </Page>
        <Page number={5}>
          <div className="data-container">
            <div className="data-logo">
              <p>MC img here</p>
              {/* <LazyLoadImage
                alt={"money captain labs"}
                height={50}
                src={
                  "https://www.moneycaptainlabs.com/wp-content/uploads/2021/02/logo-b.png"
                }
                width={150}
              /> */}
            </div>
            <div className="p-2">
              <span className="shimmer-fancy-letter fancy-letter">𝕸</span>
              oneycaptain is a family affair!
            </div>
            <div className="p-2">
              My sister (whos also a dev) and I started this company because we
              feel confident we can use tech to help battle financial
              illiteracy.
            </div>
            <div className="p-2">
              We use React Native, Express.js, Postgres, Git, Trello, GraphQL
              and other technologies in our work flow.
            </div>
            <div className="p-2">
              We are currently working on HypePerks! HypePerks is designed for
              children to earn incentives for doing chores or just achieving
              goals set up!
            </div>
          </div>
        </Page>
        <Page number={6}>
          <div className="data-container">
            <div className="data-logo">
              <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ height: 150, width: 150 }}
              />
            </div>
            <div className="back-cover-first-text">
              <div className="shimmer-fancy-letter fancy-letter">𝓣</div>
              <div>his story doesnt end here.</div>
            </div>
            <div className="p-2">
              Im available to consult about your prospective project/idea.
            </div>
            <div className="p-2">
              {/* <NavLink
                className="contact-link-color shimmer font22"
                to={"contact"}
              >
                Send me a message!
              </NavLink>
              <StyledKofiButton color="#785e3a" /> */}
            </div>
          </div>
        </Page>
        <PageCover backCover={true}></PageCover>
      </HTMLFlipBook>
    </div>
  );
}

export default FlipBookMobile;
