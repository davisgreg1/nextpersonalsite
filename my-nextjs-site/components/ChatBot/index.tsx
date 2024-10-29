"use client";
import React, { useState, useEffect, useContext } from "react";
import Lottie from "react-lottie-player";
import { signOut, useSession } from "next-auth/react";
import cx from "classnames";
import { GoSignOut } from "react-icons/go";
import AIModal from "@/components/AIModal";
import chatBotJson from "@/public/images/lottie/chatBot.json";
import styles from "./styles.module.css";
import { ChatBotContext } from "../ChatBotProvider";

function ChatBot() {
  const { data: session } = useSession();
  const { isChatOpen, setIsChatOpen } = useContext(ChatBotContext);
  const userEmail = session?.user?.email;
  const [showHint, setShowHint] = useState(true);

  const dynamicTextArr = [
    `Try clicking on me!`,
    `Hi, I am your AI assistant.`,
    `How can I help you?`,
    `Ask me questions about Greg!`,
    `Ask me questions about anything!`,
  ];
  const [dynamicText, setDynamicText] = useState(dynamicTextArr[0]);

  const handleOnClick = () => setIsChatOpen(!isChatOpen);

  useEffect(() => {
    if (!!userEmail) {
      setIsChatOpen(true);
    }
  }, [userEmail]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowHint((hint) => !hint);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dynamicTextArr.length);
    setDynamicText(dynamicTextArr[randomIndex]);
  });

  return (
    <div id="chatBotId" className="flex w-[60%] tablet:w-1/3 cursor-pointer">
      {!isChatOpen && (
        <Lottie
          loop
          animationData={chatBotJson}
          play
          data-hint-text={dynamicText}
          className={cx(`relative z-[1] flex ${isChatOpen ? "top-0" : ""}`, {
            [styles.animate]: !isChatOpen,
          })}
          onClick={handleOnClick}
        />
      )}
      {isChatOpen && (
        <>
          {userEmail && (
            <button
              title="Sign Out"
              type="button"
              id="signOutButton"
              className={`z-50 fixed top-0 right-0 p-4 cursor-pointer`}
              onClick={() => signOut()}>
              <div className={styles.signOutContainer}>
                <GoSignOut color="white" size={"2rem"} />
                <span>Sign out</span>
              </div>
            </button>
          )}
          <div className="z-[1] w-full h-full flex justify-center items-center">
            <div className={styles.overlay} onClick={handleOnClick}>
              <div className="h-full w-full flex items-center justify-center"></div>
            </div>
            <AIModal />
          </div>
        </>
      )}
    </div>
  );
}

export default ChatBot;
