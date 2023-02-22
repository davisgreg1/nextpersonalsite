"use client";
import React, { useState } from "react";
import { Cloud, renderSimpleIcon, ICloud } from "react-icon-cloud";
import {
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
  siAmazonaws,
  siJest,
  siVisualstudiocode,
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
  siW3c,
  siContentful,
} from "simple-icons";

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
    siAmazonaws,
    siJest,
    siVisualstudiocode,
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
    siW3c,
    siContentful,
  ];
  const [skillSelectedDescription, setSkillSelectedDescription] = useState(
    "Select one of my skills"
  );

  const renderSkillDescription = (skill: string) => {
    switch (skill) {
      case "JavaScript":
        return `Javascript is my primary language. I have experience with ES6,
        TypeScript, React, Redux, Node.js, Express, and many other
        technologies.
        `;
      case "Jest":
        return `Jest is a testing framework for JavaScript I use. Lately, I find myself really enjoying react-testing-library to test my components.`;

      case "Visual Studio Code":
        return `Visual Studio Code is a code editor that I enjoy using daily.`;

      case "JSON":
        return `JSON is a data format that I use daily.`;

      case "Trello":
        return `Trello is a project management tool that I use for my team over at Money Captain.`;

      case "jQuery":
        return `JQuery is a JavaScript library. Although I have much experience with it, I don't use it as much lately.`;

      case "npm":
        return `NPM is a package manager for JavaScript. I use it daily. I also use yarn for managing dependencies.`;

      case "Jira":
        return `Jira is a project management tool that I use daily for my main job over at AutoZone.com.`;

      case "Redis":
        return `Redis is a key-value store. I use it for caching data.`;

      case "macOS":
        return `MacOS is a platform that I use daily. Windows is OK, but I prefer macOS.`;

      case "React":
        return `React is a JavaScript library that I use daily.`;

      case "CSS3":
        return `CSS3 is a style sheet language. It's pretty much required to use CSS if you are a dev.`;

      case "HTML5":
        return `HTML5 is a markup language. One may not have a website without HTML.`;

      case "Git":
        return `Git is a version control system that I use daily. I use GitLab and GitHub.`;

      case "Express":
        return `Express is a web framework that I use daily. I really enjoy using it for those full stack projects.`;

      case "PostgreSQL":
        return `PostgreSQL is a database that I have a lot of experience with. I recently started trying out Sequelize to help work faster.`;

      case "Amazon AWS":
        return `Amazon AWS is a cloud platform that I use with my personal projects.`;

      case "TypeScript":
        return `TypeScript is a JavaScript library. It's awesome. We use it over at AutoZone.com`;

      case "Node.js":
        return `Node.js is a JavaScript runtime. It's pretty amazing with everything it has to offer.`;

      case "Sequelize":
        return `Sequelize is a database ORM. I just recently started using it and it's already positively impacted my work efficiency.`;

      case "Next.js":
        return `Next.js is a web framework that I use daily. I built this website with Remix, but NextJS would have been just as much fun to use.`;

      case "Activision":
        return `Activision is a video game company that I really enjoy supporting. One of my favorite games is Call of Duty.`;

      case "Auth0":
        return `Auth0 is an authentication and authorization platform that I use daily. It's pretty awesome.`;

      case "Android Studio":
        return `Android Studio is an IDE that I use often. I'm currently working on a mobile app for my team over at Money Captain.`;

      case "Xcode":
        return `Xcode is an IDE that I use often. I'm currently working on a mobile app for my team over at Money Captain.`;

      case "Apollo GraphQL":
        return `Apollo GraphQL is a GraphQL client that I have an abundance of experience with.`;

      case "Honda":
        return `Honda is a car company that I really enjoy supporting. I have a 2022 Honda Pilot Black Edition.`;

      case "Dogecoin":
        return `Dogecoin is a cryptocurrency that I really enjoy supporting. I, unfortunately, have a few Dogecoins.`;

      case `McDonald's`:
        return `Pretty much an expert at ordering happy meals for the kids.`;

      case "Codewars":
        return `Codewars is a website that I use to hone my coding skills.`;

      case "Cognizant":
        return `Cognizant is a company at which I am a senior software engineer.`;

      case "Figma":
        return `Figma is a design tool that I use daily.`;

      case "Spotify":
        return `Spotify is a music streaming service that I use daily.`;

      case "Tidal":
        return `Tidal is a music streaming service that I use daily.`;

      case "USPS":
        return `USPS is a shipping company that I used to work for. It was an eye opening experience.`;

      case "W3C":
        return `W3C is a website that I used to lead the push to improve a11y for autozone.com.`;

      case "Contentful":
        return `Contentful is a content management system that I use with my personal website.`;
    }
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
        paddingTop: 40,
        backgroundImage:
          "radial-gradient( circle, rgb(11, 34, 238) 0%, rgb(15, 120, 181) 100%, rgb(17, 216, 251) 50% )",
        borderRadius: "777px",
      },
    },
    // https://www.goat1000.com/tagcanvas-options.php
    options: {
      clickToFront: 500,
      depth: 1,
      imageScale: 2,
      initial: [0.1, -0.1],
      outlineColour: "#0000",
      reverse: true,
      tooltipDelay: 0,
      wheelZoom: false,
      maxSpeed: 0.06,
      freezeActive: true,
      freezeDecel: true,
      shuffleTags: true,
      radiusX: 0.9,
      radiusY: 0.9,
      radiusZ: 0.9,
      // shape: "hring",
      // lock: "x",
    },
  });

  const makeIcons = () =>
    icons?.map((icon: any) => {
      const description = renderSkillDescription(icon.title);
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
            const skillsDescriptionText = document.getElementById(
              "skillsDescriptionText"
            );
            const skillDescriptionHome = document.getElementById(
              "skillDescriptionHome"
            );
            if (skillsDescriptionText) {
              if (description) {
                skillsDescriptionText.innerHTML = description;
              }
            }
            if (skillDescriptionHome) {
              if (description) {
                skillDescriptionHome.innerHTML = icon.title;
              }
            }
          },
        },
      });
    });
  const constructedProps = makeProps();
  const cloudIcons = makeIcons();

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        {<p className="pb-8 absolute top-14" id="skillDescriptionHome" />}
        <Cloud
          containerProps={constructedProps.containerProps}
          options={constructedProps.options}
          id={ssrID}
        >
          {cloudIcons}
        </Cloud>
      </div>
    </>
  );
};
export default CloudTag;
