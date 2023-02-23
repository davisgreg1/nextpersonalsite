import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import loadingDots from "@/images/lottie/loadingDots.json";

type ConversationType = {
  userText: string;
  botText: string;
};

export default function MyModalContent() {
  const computerScreenRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendResponse, setSendResponse] = useState(false);
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
            setLoading(false);
            setConversation(conversation.pop());
            setConversation([
              ...conversation,
              {
                userText: inputText,
                botText: data.choices[0].text,
              },
            ]);
            setInputText("");
          })
          .catch((err) => {
            setConversation([
              ...conversation,
              {
                userText: inputText,
                botText: `Sorry, but something went wrong. Please try again later.`,
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
  }, [conversation, inputText, sendResponse]);

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

  // const handleStart = () => console.log("handleStart");
  // const handleDrag = () => console.log("handleDrag");
  // const handleStop = () => console.log("handleStop");

  const defaultPosXY = isLargeScreen ? { x: 0, y: 0 } : { x: -150, y: -150 };

  const screenImgStyle = {
    backgroundImage: "url(/screen.png)",
    backgroundSize: "contain",
    backgroundRepeat: "round",
    display: "flex",
  };
  return (
    <Draggable
      axis="both"
      handle={".handle"}
      defaultPosition={defaultPosXY}
      grid={[25, 25]}
      scale={1}
      // onStart={handleStart}
      // onDrag={handleDrag}
      // onStop={handleStop}
    >
      <motion.div
        className={`z-[1] opacity-100 h-96 w-96 absolute flex justify-center items-center`}
        style={screenImgStyle}
      >
        <div className="bg-[#146714] h-44 w-60 absolute top-12 overflow-scroll pt-2 border-transparent rounded-md handle">
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
                  className="break-words text-lg text-blue-500 md:text-xl pl-1 pb-1 pr-1"
                >
                  {item.userText ? `You: ${item.userText}` : ""}
                </span>
                <span
                  id="transition-modal-description"
                  className="break-words text-lg  md:text-xl pl-1 pb-1 flex flex-row"
                >
                  Greg: $
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
              </div>
            );
          })}
        </div>
        <input
          value={inputText}
          placeholder="ask me anything"
          className="bg-gray-400 h-12 w-60 absolute bottom-[-50px]  placeholder-black px-2"
          onChange={handleInputText}
          onKeyDown={handleKeyDown}
        />
      </motion.div>
    </Draggable>
  );
}
