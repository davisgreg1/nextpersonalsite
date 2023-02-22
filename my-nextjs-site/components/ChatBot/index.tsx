"use client";
import React, { useState } from "react";
import Lottie from "react-lottie-player";
import AIModal from "@/components/AIModal";
import chatBotJson from "@/images/lottie/chatBot.json";
import styles from "./styles.module.css";

function ChatBot() {
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => setShowModal(!showModal);

  return (
    <div id="chatBotId" className="absolute h-48 w-48  z-50 bottom-0 right-0">
      <Lottie
        loop
        animationData={chatBotJson}
        play
        className={`relative z-[50] ${
          showModal ? "top-0" : ""
        } cursor-pointer ${styles.animate}`}
        onClick={handleOnClick}
      />
      {showModal && (
        <div className="z-[99]">
          <div className={styles.overlay} onClick={handleOnClick} />
          <AIModal />
        </div>
      )}
    </div>
  );
}

export default ChatBot;
