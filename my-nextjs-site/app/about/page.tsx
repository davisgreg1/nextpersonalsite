"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@react-hook/media-query";
import { motion, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie-player";
import BarChart from "@/components/BarChart";
import CarouselComp from "@/components/Carousel";
import AboutDesktop from "@/components/AboutDesktop";
import ParallaxImage from "@/components/ParallaxImage";
import MorphingLetters from "@/components/MorphingLetters";
import WorkItem from "@/components/WorkItem";
import styles from "./styles.module.css";
import scrollDown from "@/public/images/lottie/scrollDown.json";
import workerJson from "@/public/images/lottie/workerJson.json";
import pursuitPng from "@/public/images/pursuit.png";
import mcLogo from "@/public/images/mcLogo.png";
import AboutMeText from "@/components/AboutMeText";

export default function About() {
  const router = useRouter();

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);
  const opacityRef = useRef<HTMLDivElement>(null);
  const isLargeScreen = useMediaQuery("only screen and (min-width: 720px)");

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const url = "/images/meSepia.jpeg";
  const id = "background-img";

  const [showLetters, setShowLetters] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [canPush, setCanPush] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showAnim");
        } else {
          entry.target.classList.remove("showAnim");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hiddenAnim");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }, [isLargeScreen]);

  useEffect(() => {
    setShowLetters(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const opacityValue = 1 - scrollY.get() / 100;
      if (opacityRef.current) {
        opacityRef.current.style.opacity = String(opacityValue);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollRotate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollRotate);
    };
  }, [scrollY]);

  useEffect(() => {
    setCanPush(true);
  }, [router]);

  const handleScrollRotate = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    prevScrollY.current = currentScrollY;
  };

  const scrollToNextSection = (idx: number) => {
    const whichIdx = scrollDirection === "down" ? idx + 1 : idx;
    const currentSectionIndex = currentSection;
    const nextSection = sectionsRef.current[whichIdx];
    if (nextSection) {
      const top = nextSection.offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
      setCurrentSection(currentSectionIndex + 1);
    }
  };

  const handleOnClick = () => {
    if (canPush) router.push("/contact");
  };

  const items = [
    <WorkItem
      key="1"
      body={`Learning to program at this wonderfully intense school for one year was an incredibly enjoyable experience for me. It serves as a major force for who I am today.`}
      isImg={true}
      imgURL={pursuitPng}
      handleOnClick={() =>
        window.open("https://pursuit.org/blog/the-skys-the-limit")
      }
      buttonText="Visit"
    />,
    <WorkItem
      key="2"
      imgURL=""
      body={`This is my first job as a developer. Thus far, it has been an incredible learning experience that vastly improves my skills on a daily basis.`}
      handleOnClick={() => window.open("https://cognizant.com")}
      buttonText="Visit"
      ImageComponent={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Cognizant_Logo"
          x="0px"
          y="0px"
          width={"175px"}
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
      }
    />,
    <WorkItem
      imgURL=""
      key="3"
      body={`The lessons I'm learning from 4 years of developing this highly complex e-commerce platform continues to shape my career in meaningful ways.`}
      handleOnClick={() => window.open("https://autozone.com")}
      buttonText="Visit"
      ImageComponent={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={"175px"}
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
      }
    />,
    <WorkItem
      key="4"
      body={`Starting my first business with my amazingly awesome sister, Sky, is an exhilarating adventure filled with creative collaboration and endless possibilities.`}
      handleOnClick={() => window.open("https://moneycaptainlabs.com/")}
      buttonText="Visit"
      isImg={true}
      imgURL={mcLogo}
    />,
    <WorkItem
      imgURL=""
      key="5"
      body={`I'm currently available to freelance. Contact me and let's get stuff done!`}
      handleOnClick={handleOnClick}
      buttonText="Visit"
      ImageComponent={
        <div className={styles.workLottie}>
          <Lottie
            loop
            animationData={workerJson}
            play
            style={{
              height: 125,
              width: 125,
              position: "absolute",
              top: "50px",
              left: "38%",
            }}
          />
        </div>
      }
    />,
  ];

  return (
    <>
      <div className={`tablet:hidden ${styles.aboutContainer}`}>
        <motion.div
          className="z-[1] fixed w-full overflow-hidden rounded-full border-[16px] border-transparent"
          ref={opacityRef}
          style={{ opacity }}
        >
          <ParallaxImage
            imageUrl={url}
            priority={true}
            customStyles={styles.parallaxContainer}
            alt="image of Gregory Davis"
          />
        </motion.div>
        <div className={`flex w-full flex-col ${styles.pageDetailsContainer}`}>
          <div className="flex items-center justify-center flex-col">
            <div
              className="flex mt-40"
              ref={(el) => (sectionsRef.current[0] = el)}
            >
              {" "}
              {showLetters ? (
                <>
                  <MorphingLetters str={`A`} />
                  <MorphingLetters str={`b`} />
                  <MorphingLetters str={`o`} />
                  <MorphingLetters str={`u`} />
                  <MorphingLetters str={`t`} />
                </>
              ) : (
                <></>
              )}
            </div>
            <div
              onClick={() => scrollToNextSection(0)}
              className={`${
                scrollDirection === "down"
                  ? styles.lottieContainer
                  : styles.rotate
              }`}
            >
              <Lottie
                className="w-[100px] h-[100px]"
                loop
                animationData={scrollDown}
                play
              />
            </div>
            <div className="mt-40" ref={(el) => (sectionsRef.current[1] = el)}>
              <AboutMeText />
            </div>
            <div
              onClick={() => scrollToNextSection(1)}
              className={`flex justify-center items-center w-full`}
            >
              <Lottie
                loop
                animationData={scrollDown}
                play
                className={`w-[90px] h-[92px] ${
                  scrollDirection === "down"
                    ? styles.lottieContainer
                    : styles.rotate
                }`}
              />
            </div>
            {!isLargeScreen && (
              <div ref={(el) => (sectionsRef.current[2] = el)}>
                <div className={`${styles.barChartContainer} mt-40`} ref={ref}>
                  <motion.div
                    initial={{ x: "100vw" }}
                    animate={inView ? { x: 0 } : { x: "100vw" }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      duration: 0.5,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <BarChart />
                  </motion.div>
                </div>
              </div>
            )}
            <div onClick={() => scrollToNextSection(2)}>
              <Lottie
                loop
                animationData={scrollDown}
                play
                className={`w-[90px] h-[92px] ${
                  scrollDirection === "down"
                    ? styles.lottieContainer
                    : styles.rotate
                }`}
              />
            </div>
            <div
              className="mt-40"
              ref={(el) => (sectionsRef.current[3] = el)}
            ></div>
            <CarouselComp items={items} />
          </div>
        </div>
      </div>
      <AboutDesktop />
    </>
  );
}
