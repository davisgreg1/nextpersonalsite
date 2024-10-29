"use client";
import { createContext, useState, ReactNode } from "react";

type ChatBotProviderType = {
  setIsChatOpen: (value: boolean) => void;
  isChatOpen: boolean;
};

export const ChatBotContext = createContext<ChatBotProviderType>(
  {} as ChatBotProviderType,
);

type ChatBotProviderProps = {
  children: ReactNode;
};

export const ChatBotProvider = ({ children }: ChatBotProviderProps) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  return (
    <ChatBotContext.Provider
      value={{
        isChatOpen,
        setIsChatOpen,
      }}>
      {children}
    </ChatBotContext.Provider>
  );
};
