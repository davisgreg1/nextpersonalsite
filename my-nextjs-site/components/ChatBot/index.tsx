"use client";
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import { signOut, useSession } from "next-auth/react";
import { GoSignOut } from "react-icons/go";
import AIModal from "@/components/AIModal";
import chatBotJson from "@/public/images/lottie/chatBot.json";
import styles from "./styles.module.css";

function ChatBot() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => setShowModal(!showModal);

  useEffect(() => {
    if (!!userEmail) {
      setShowModal(true);
    }
  }, [userEmail]);

  return (
    <div id="chatBotId" className="flex w-[60%] tablet:w-1/3 cursor-pointer">
      {!showModal && (
        <Lottie
          loop
          animationData={chatBotJson}
          play
          className={`relative z-[1] flex ${showModal ? "top-0" : ""} ${
            styles.animate
          }`}
          onClick={handleOnClick}
        />
      )}
      {showModal && (
        <>
          {userEmail && (
            <button
              id="signOutButton"
              className={`z-50 fixed top-0 right-0 p-4 cursor-pointer`}
              onClick={() => signOut()}
            >
              <GoSignOut size={"2rem"} />
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
