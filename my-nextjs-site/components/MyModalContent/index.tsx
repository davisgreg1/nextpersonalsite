import React, { useEffect, useRef, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Switch from "react-switch";
import Draggable from "react-draggable";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import loadingDots from "@/public/images/lottie/loadingDots.json";
import styles from "./styles.module.css";
import Cursor from "@/components/Cursor";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

type ConversationType = {
  userText: string;
  botText: string;
};

export default function MyModalContent() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const userName = session?.user?.name;
  const computerScreenRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendResponse, setSendResponse] = useState(false);
  const [dragMode, setDragMode] = useState(false);
  const [conversation, setConversation] = useState([]) as any;
  const isLargeScreen = useMediaQuery("only screen and (min-width: 720px)");

  useEffect(() => {
    async function sendMessage(inputText: string) {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputText }),
        });
        if (response) {
          const data = await response.json();
          return data;
        }
      } catch (error) {
        console.error(error);
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
                botText: `A.I. is sleeping 😴 now. Try again later.`,
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
  }, [conversation, inputText, sendResponse, session]);

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

  const handleChange = (checked: boolean) => setDragMode(checked);

  // const handleStart = () => console.log("handleStart");
  // const handleDrag = () => console.log("handleDrag");
  // const handleStop = () => console.log("handleStop");

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
    <>
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
            <p className={styles.dragText}>Drag mode: {dragMode ? "1" : "0"}</p>
            <Switch
              onColor={"#146714"}
              height={20}
              onChange={handleChange}
              checked={dragMode}
            />
          </div>
          <div className="bg-[#146714] h-44 w-60 absolute top-12 overflow-scroll pt-2 border-transparent rounded-md handle">
            {!userEmail ? (
              <div>
                <button onClick={() => handleOnClick("github")}>
                  <AiFillGithub size={"2rem"} />
                </button>
                <button onClick={() => handleOnClick("google")}>
                  <AiFillGoogleCircle size={"2rem"} />
                </button>
              </div>
            ) : (
              <div>
                <p
                  className="text-lg tablet:text-xl pl-1 pb-1"
                  style={{ fontFamily: "'DEC VT100', monospace" }}
                >
                  Hi, {userName}!
                </p>
                {conversation?.map((item: ConversationType, index: number) => {
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
                        className="break-words text-lg text-blue-500 tablet:text-xl pl-1 pb-1 pr-1"
                      >
                        {item.userText
                          ? `${userName?.split(" ")[0]}: ${item.userText}`
                          : ""}
                      </span>
                      <span
                        id="transition-modal-description"
                        className="break-words text-lg tablet:text-xl pl-1 pb-1 flex flex-row"
                      >
                        Greg [A.I.]:
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
                          item.botText
                        )}
                      </span>
                      {!loading && lastItemInList && (
                        <span className="pl-1">
                          <Cursor />
                        </span>
                      )}
                    </div>
                  );
                })}
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
    </>
  );
}
