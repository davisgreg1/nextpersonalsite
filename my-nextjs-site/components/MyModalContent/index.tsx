import React, { useEffect, useRef, useState } from "react";
import useSwr from "swr";
import { signIn, useSession } from "next-auth/react";
import Switch from "react-switch";
import Draggable from "react-draggable";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import loadingDots from "@/public/images/lottie/loadingDots.json";
import dragPC from "@/public/images/lottie/dragPC.json";
import styles from "./styles.module.css";
import Cursor from "@/components/Cursor";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { hashString } from "@/utils/hashFunctions";
import { DBConversationDataType, DefaultConversationType } from "@/types";

export default function MyModalContent() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const hashedEmail = hashString(userEmail || "");
  const userName = session?.user?.name;
  const computerScreenRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendResponse, setSendResponse] = useState(false);
  const [dragMode, setDragMode] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [conversation, setConversation] = useState([]) as any;
  const isLargeScreen = useMediaQuery("only screen and (min-width: 720px)");

  useEffect(() => {
    async function getConversation() {
      try {
        const response = await fetch(`/api/chat/${hashedEmail}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response) {
          const data = await response.json();
          if (data.data.length > 0) {
            const newData = data?.data?.map((item: DBConversationDataType) => {
              return {
                userText: item.question,
                botText: item.answer,
              };
            });
            return setConversation(newData);
          }
        }
      } catch (error) {
        console.error({ error });
      }
    }
    getConversation();
  }, [hashedEmail]);

  useEffect(() => {
    if (showAnimation) {
      setTimeout(() => {
        setShowAnimation(false);
      }, 4000);
    }
  }, [showAnimation]);

  useEffect(() => {
    async function sendMessage(inputText: string) {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputText, email: userEmail }),
        });
        if (response) {
          const data = await response.json();
          return data;
        }
      } catch (error) {
        console.error({ error });
      }
    }
    if (inputText.length > 10 && sendResponse) {
      try {
        sendMessage(inputText)
          .then((data) => {
            const {
              data: { choices },
            } = data;
            setLoading(false);
            setConversation(conversation.pop());
            setConversation([
              ...conversation,
              {
                userText: inputText,
                botText: choices[0].message.content,
              },
            ]);
            setInputText("");
          })
          .catch((err) => {
            setConversation([
              ...conversation,
              {
                userText: inputText,
                botText: `Try with a shorter question, or go chat 💬 with Greg to fix.`,
              },
            ]);
          });
      } catch (error) {
        console.error("🚀 ~ file: index.tsx:56 ~ useEffect ~ error", error);
      }
    }

    if (sendResponse) {
      setSendResponse(false);
    }
  }, [conversation, inputText, sendResponse, session, userEmail]);

  useEffect(() => {
    if (computerScreenRef.current) {
      computerScreenRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (event.key === "Enter" || (event.key === "Enter" && event.metaKey)) &&
      inputText.length >= 10
    ) {
      setConversation([
        ...conversation,
        {
          userText: inputText,
          botText: "",
        },
      ]);
      handleOnBtnClick();
    }
  };

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInputText(e.target.value);

  const handleOnBtnClick = () => {
    setSendResponse(true);
    setLoading(true);
  };

  const handleChange = (checked: boolean) => {
    setShowAnimation(checked);
    setDragMode(checked);
  };

  // const handleStart = () => console.log("handleStart");
  // const handleDrag = () => console.log("handleDrag");
  // const handleStop = () => {
  //   setTimeout(() => {
  //     setDragMode(false);
  //   }, 1000);
  // };

  const defaultPosXY = isLargeScreen ? { x: 0, y: 0 } : { x: -150, y: -150 };

  const screenImgStyle = {
    backgroundImage: "url(/images/screen.png)",
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex",
  };

  const handleOnClick = (method: string) => {
    signIn(method);
  };

  return (
    <Draggable
      axis="both"
      handle={".handle"}
      defaultPosition={defaultPosXY}
      grid={[1, 1]}
      scale={1}
      disabled={!dragMode}
      // onStart={handleStart}
      // onDrag={handleDrag}
      // onStop={handleStop}
    >
      <motion.div
        className={`z-[1] opacity-100 h-96 w-96 absolute flex justify-center items-center`}
        style={screenImgStyle}
      >
        <div className="z-[2] text-black flex self-start w-4/5 items-center justify-around mt-6">
          <p className={styles.dragText}>
            Drag mode: {dragMode ? "on" : "off"}
          </p>
          <Switch
            onColor={"#146714"}
            height={20}
            onChange={handleChange}
            checked={dragMode}
          />
        </div>
        <div className="bg-[#146714] h-44 w-60 absolute top-12 overflow-scroll pt-2 border-transparent rounded-md handle">
          {!userEmail ? (
            <>
              <div className="flex justify-evenly">
                <button onClick={() => handleOnClick("github")}>
                  <AiFillGithub size={"2rem"} />
                </button>
                <button onClick={() => handleOnClick("google")}>
                  <AiFillGoogleCircle size={"2rem"} />
                </button>
                <button onClick={() => handleOnClick("facebook")}>
                  <AiFillFacebook size={"2rem"} />
                </button>
              </div>
              {showAnimation && (
                <Lottie
                  loop
                  animationData={dragPC}
                  play
                  rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                  style={{
                    height: "auto",
                    width: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    position: "fixed",
                    top: "0",
                  }}
                />
              )}
            </>
          ) : (
            <div>
              <p
                className="text-lg tablet:text-xl pl-1 pb-1"
                style={{ fontFamily: "'DEC VT100', monospace" }}
              >
                Hi, {userName}!
              </p>
              {showAnimation && (
                <Lottie
                  loop
                  animationData={dragPC}
                  play
                  rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                  style={{
                    height: "auto",
                    width: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    position: "fixed",
                    top: "0",
                  }}
                />
              )}
              {conversation?.map(
                (item: DefaultConversationType, index: number) => {
                  const lastItemInList = index === conversation.length - 1;
                  return (
                    <div
                      ref={computerScreenRef}
                      key={index}
                      className="flex flex-col"
                      style={{ fontFamily: "'DEC VT100', monospace" }}
                    >
                      <span
                        id="transition-modal-description"
                        className="break-words text-lg tablet:text-xl text-blue-400 pl-1 pb-1 pr-1"
                      >
                        <span className="text-blue-300">
                          {item.userText
                            ? `${
                                userName?.split(" ")[0]
                                  ? userName?.split(" ")[0]
                                  : "You"
                              }: `
                            : ""}
                        </span>
                        <span>{item.userText}</span>
                      </span>
                      <span
                        id="transition-modal-description"
                        className={`break-words text-lg tablet:text-xl pl-1 py-4 flex-row ${
                          loading && lastItemInList ? "flex" : "inline"
                        }`}
                      >
                        <span className="text-[#a19494]">Greg [A.I.]: </span>
                        {loading && lastItemInList ? (
                          <Lottie
                            loop
                            animationData={loadingDots}
                            play
                            rendererSettings={{
                              preserveAspectRatio: "xMidYMid slice",
                            }}
                            className="h-[30px] w-20 .computerScreen"
                          />
                        ) : (
                          <span>{item.botText}</span>
                        )}
                      </span>
                      {/* {!loading && lastItemInList && (
                        <span className="pl-1">
                          <Cursor />
                        </span>
                      )} */}
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
        <input
          value={inputText}
          placeholder={
            !userEmail ? "Choose an option to sign in." : "Ask me anything."
          }
          className={`bg-gray-400 h-12 w-60 absolute bottom-[-50px] rounded-[10px] placeholder-black px-2 ${styles.inputText}}`}
          onChange={handleInputText}
          onKeyDown={handleKeyDown}
          disabled={!userEmail}
        />
      </motion.div>
    </Draggable>
  );
}
