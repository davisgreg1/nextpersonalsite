"use client";
import Lottie from "react-lottie-player";
import loading from "@/images/lottie/loading.json";

function LoadingPage() {
  return (
    <div className="h-screen flex justify-center items-center m-auto">
      <Lottie
        loop
        animationData={loading}
        play
        style={{ height: 400, width: 400 }}
      />
    </div>
  );
}

export default LoadingPage;
