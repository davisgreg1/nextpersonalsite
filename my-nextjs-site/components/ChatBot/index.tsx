"use client";
import React, { useState } from "react";
import Lottie from "react-lottie-player";
import AIModal from "@/components/AIModal";
import chatBotJson from "@/images/lottie/chatBot.json";
import styles from "./styles.module.css";
import MorphingLetters from "../MorphingLetters";

function ChatBot() {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => setShowModal(!showModal);

  return (
    <div id="chatBotId" className="flex w-[60%] md:w-1/3 cursor-pointer">
      <Lottie
        loop
        animationData={chatBotJson}
        play
        className={`relative z-[1] flex ${
          showModal ? "top-0" : ""
        } cursor-pointer ${styles.animate}`}
        onClick={handleOnClick}
      />
      {showModal && (
        <div className="z-[1] w-full h-full flex justify-center items-center">
          <div className={styles.overlay} onClick={handleOnClick}>
            <div className="h-full w-full flex items-center justify-center">
            </div>
          </div>
          <AIModal />
        </div>
      )}
    </div>
  );
}

export default ChatBot;
