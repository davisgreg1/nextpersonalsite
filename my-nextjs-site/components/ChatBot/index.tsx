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
    <>
      <Lottie
        loop
        animationData={chatBotJson}
        play
        className={`h-48 w-48 absolute z-50 bottom-0 right-0 mr-8 ${
          showModal ? "top-0" : ""
        } cursor-pointer ${styles.animate}`}
        onClick={handleOnClick}
      />
      {showModal && (
        <div className="z-[99]">
          <div className={styles.overlay} />
          <AIModal />
        </div>
      )}
    </>
  );
}

export default ChatBot;
