"use client";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import React from "react";
import { Cloud, renderSimpleIcon, ICloud } from "react-icon-cloud";
import {
  siOpenai,
  siJavascript,
  siTypescript,
  siNextdotjs,
  siNodedotjs,
  siCss as siCss3,
  siHtml5,
  siReact,
  siGit,
  siExpress,
  siPostgresql,
  siJest,
  siSequelize,
  siJson,
  siTrello,
  siJquery,
  siNpm,
  siJira,
  siRedis,
  siMacos,
  siActivision,
  siAuth0,
  siAndroidstudio,
  siXcode,
  siApollographql,
  siHonda,
  siDogecoin,
  siMcdonalds,
  siCodewars,
  siCognizant,
  siFigma,
  siSpotify,
  siTidal,
  siUsps,
  // siW3schools,
  siContentful,
} from "simple-icons";

type SkillDescription = {
  [key: string]: string;
};

type IconType = {
  title: string;
};

const CloudTag = (props: any) => {
  const { ssrID } = props;
  const icons = [
    siJavascript,
    siTypescript,
    siNextdotjs,
    siNodedotjs,
    siCss3,
    siHtml5,
    siReact,
    siGit,
    siExpress,
    siPostgresql,
    siJest,
    siSequelize,
    siJson,
    siTrello,
    siJquery,
    siNpm,
    siJira,
    siRedis,
    siMacos,
    siActivision,
    siAuth0,
    siAndroidstudio,
    siXcode,
    siApollographql,
    siHonda,
    siDogecoin,
    siMcdonalds,
    siCodewars,
    siCognizant,
    siFigma,
    siSpotify,
    siTidal,
    siUsps,
    // siW3schools,
    siContentful,
    siOpenai,
  ];
  const { data: session } = useSession();

  const userName = session?.user?.name;

  const trimmedUserName = userName?.trim();

  const firstName = trimmedUserName?.split(" ")[0];

  const firstNameAvailable = !!firstName;

  const skillDescriptions: SkillDescription = {
    JavaScript: `Javascript is my primary language. I have experience with ES6,
    TypeScript, React, Redux, Node.js, Express, and many other
    technologies.
    `,
    Jest: `Jest is a testing framework for JavaScript I use. Lately, I find myself really enjoying react-testing-library to test my components.`,
    "Visual Studio Code": `Visual Studio Code is a code editor that I enjoy using daily.`,
    JSON: `JSON is a data format that I use daily.`,
    Trello: `Trello is a project management tool that I use for my team over at Money Captain and any personal projects.`,
    jQuery: `JQuery is a JavaScript library. Although I have much experience with it, I don't use it as much lately.`,
    npm: `NPM is a package manager for JavaScript. I use it daily. I also use yarn for managing dependencies.`,
    Jira: `Jira is a project management tool that I use daily at autozone.com.`,
    Redis: `Redis is a key-value store. I use it for caching data.`,
    macOS: `MacOS is a platform that I use daily. Windows is OK, but I prefer macOS.`,
    React: `React is a JavaScript library that I use daily.`,
    CSS3: `CSS3 is a style sheet language. It's pretty much required to use CSS if you are a front end developer.`,
    HTML5: `HTML5 is a markup language. One may not have a website without HTML. 🙂`,
    Git: `Git is a version control system that I use daily. I use GitLab and GitHub.`,
    Express: `Express is a web framework that I use daily. I really enjoy using it for those full stack projects.`,
    PostgreSQL: `PostgreSQL is a database that I have a lot of experience with. I recently started trying out Sequelize to help work faster.`,
    "Amazon AWS": `Amazon AWS is a cloud platform that I use with my personal projects.`,
    TypeScript: `TypeScript is a JavaScript library. It's awesome. We use it over at autozone.com.`,
    "Node.js": `Node.js is a JavaScript runtime. It's pretty amazing with everything it has to offer.`,
    Sequelize: `Sequelize is a database ORM. I just recently started using it and it's already positively impacted my work efficiency.`,
    "Next.js": `Next.js is a web framework that I use daily. I built this website with Next JS.`,
    Activision: `Activision is a video game company that I really enjoy supporting. One of my favorite games is Call of Duty.`,
    Auth0: `Auth0 is an authentication and authorization platform that I use daily. It's pretty awesome.`,
    "Android Studio": `Android Studio is an IDE that I use often. I'm currently working on a mobile app for my team over at Money Captain.`,
    Xcode: `Xcode is an IDE that I use often. I'm currently working on a mobile app for my team over at Money Captain.`,
    "Apollo GraphQL": `Apollo GraphQL is a GraphQL client that I have an abundance of experience with.`,
    Honda: `Honda is a car company that I really enjoy supporting. My family enjoys our Honda Pilot.`,
    Dogecoin: `Dogecoin is a cryptocurrency I invest in. I'm a big fan of Elon Musk.`,
    [`McDonald's`]: `Pretty much an expert at ordering happy meals for the kids when the, "I'm huunnnggryyyyy's!!!" start up. 🤣`,
    Codewars: `Codewars is a website that I use to hone my coding skills.`,
    Cognizant: `Cognizant is a global organization at which I am a senior software engineer.`,
    Figma: `Figma is a design tool that I use daily.`,
    Spotify: `Spotify is a music streaming service that I use daily. I love all genres of music.`,
    Tidal: `Tidal is another music streaming service that I use daily. I love the high quality audio.`,
    USPS: `USPS is a shipping company at which I decided to spend 1 year helping. It was an eye opening experience. Much respect to all the hard working people at USPS.`,
    // W3C: `I leveraged the standards and guidelines of W3C to lead the push to improve a11y for autozone.com.`,
    Contentful: `Contentful is a content management system I use to create blogs for my personal website.`,
    OpenAI: `OpenAI is a company that I am very interested in. I'm currently learning more about GPT-4 and how I can leverage it to help me with my projects.`,
  };

  const bounceIn = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const renderSkillDescription = (skill: string): string => {
    return skillDescriptions[skill] || "";
  };

  const makeProps = (): Partial<ICloud> & { root: React.CSSProperties } => ({
    root: {
      top: 0,
      left: 0,
      right: 0,
      height: "200vh",
      position: "absolute",
    },
    containerProps: {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundImage:
          "radial-gradient( circle, rgb(11, 34, 238) 0%, rgb(15, 120, 181) 100%, rgb(17, 216, 251) 50% )",
        borderRadius: "777px",
      },
    },
    // https://www.goat1000.com/tagcanvas-options.php
    options: {
      clickToFront: 900,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: "#0000",
      reverse: true,
      tooltipDelay: 0,
      wheelZoom: false,
      maxSpeed: 0.02,
      freezeActive: true,
      freezeDecel: true,
      shuffleTags: false,
      radiusX: 0.9,
      radiusY: 0.9,
      radiusZ: 0.9,
      // shape: "hring",
      // lock: "x",
    },
  });

  const makeIcons = () =>
    icons?.map((icon: IconType) => {
      const { title } = icon;
      const description = renderSkillDescription(title);
      return renderSimpleIcon({
        icon,
        minContrastRatio: 3,
        bgHex: "#fff",
        size: 42,
        fallbackHex: "#fff",
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => {
            e.preventDefault();
            const skillDescriptionHome = document.getElementById(
              "skillDescriptionHome"
            );
            if (skillDescriptionHome) {
              if (description) {
                skillDescriptionHome.innerHTML = description;
              }
            }
          },
        },
      });
    });
  const constructedProps = makeProps();
  const cloudIcons = makeIcons();

  return (
    <div className="flex justify-evenly items-center flex-col">
      {
        <motion.p
          className="px-4 flex h-28 tablet:pt-12 justify-center items-center dark:text-[#a7aec7]"
          id="skillDescriptionHome"
          initial="hidden"
          animate="visible"
          variants={bounceIn}
        >
          {`Hi ${
            firstNameAvailable ? firstName : "friend"
          }, try clicking on one of my skills below to learn more about it.`}
        </motion.p>
      }
      <div className="mx-4 flex">
        <Cloud
          containerProps={constructedProps.containerProps}
          options={constructedProps.options}
          id={ssrID}
        >
          {cloudIcons}
        </Cloud>
      </div>
    </div>
  );
};
export default CloudTag;
