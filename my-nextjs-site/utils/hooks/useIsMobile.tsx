"use client"
import { useRouter } from "next/router";

function useIsMobile() {
  const router = useRouter();
  return router.query.isMobile === "true";
}

export default useIsMobile;
