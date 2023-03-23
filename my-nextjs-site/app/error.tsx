"use client";
import Lottie from "react-lottie-player";
import lottieJson404 from "@/public/images/lottie/404.json";

function ErrorPage() {
  return (
    <div className="h-screen flex justify-center items-center mt-28">
      <Lottie
        loop
        animationData={lottieJson404}
        play
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{
          height: "400px",
          width: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
}

export default ErrorPage;
