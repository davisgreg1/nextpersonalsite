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
              <div className="flex self-start flex-wrap p-14 lg:p-4">
                <p className="text-white self-start flex flex-row pr-2">
                  <MorphingLetters noSpacing={true} str={`F`} />
                  <MorphingLetters noSpacing={true} str={`e`} />
                  <MorphingLetters noSpacing={true} str={`e`} />
                  <MorphingLetters noSpacing={true} str={`l`} />
                </p>
                <p className="text-white self-start flex flex-row pr-2">
                  <MorphingLetters noSpacing={true} str={`f`} />
                  <MorphingLetters noSpacing={true} str={`r`} />
                  <MorphingLetters noSpacing={true} str={`e`} />
                  <MorphingLetters noSpacing={true} str={`e`} />
                </p>
                <p className="text-white self-start flex flex-row pr-2">
                  <MorphingLetters noSpacing={true} str={`t`} />
                  <MorphingLetters noSpacing={true} str={`o`} />
                </p>
                <p className="text-white self-start flex flex-row pr-2">
                  <MorphingLetters noSpacing={true} str={`d`} />
                  <MorphingLetters noSpacing={true} str={`r`} />
                  <MorphingLetters noSpacing={true} str={`a`} />
                  <MorphingLetters noSpacing={true} str={`g`} />
                </p>
                <p className="text-white self-start flex flex-row pr-2">
                  <MorphingLetters noSpacing={true} str={`t`} />
                  <MorphingLetters noSpacing={true} str={`h`} />
                  <MorphingLetters noSpacing={true} str={`e`} />
                </p>
                <p className="text-white self-start flex flex-row pr-2">
                  <MorphingLetters noSpacing={true} str={`s`} />
                  <MorphingLetters noSpacing={true} str={`c`} />
                  <MorphingLetters noSpacing={true} str={`r`} />
                  <MorphingLetters noSpacing={true} str={`e`} />
                  <MorphingLetters noSpacing={true} str={`e`} />
                  <MorphingLetters noSpacing={true} str={`n`} />
                </p>
                <p className="text-white self-start flex flex-row pr-2">
                  <MorphingLetters noSpacing={true} str={`a`} />
                  <MorphingLetters noSpacing={true} str={`r`} />
                  <MorphingLetters noSpacing={true} str={`o`} />
                  <MorphingLetters noSpacing={true} str={`u`} />
                  <MorphingLetters noSpacing={true} str={`n`} />
                  <MorphingLetters noSpacing={true} str={`d`} />
                </p>
              </div>
            </div>
          </div>
          <AIModal />
        </div>
      )}
    </div>
  );
}

export default ChatBot;
