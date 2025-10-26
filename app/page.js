"use client";

import FirstSection from "./components/firstSection/mobile/FirstSection";
import HeaderMobile from "./components/header/mobile/HeaderMobile";
import SecondSection from "./components/secondSection/mobile/SecondSection";
import ThirdSection from "./components/thirdSection/mobile/ThirdSection";

import Message from "./components/Message";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true); // zakładamy, że mobile

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return <Message />;

  return (
    <>
      <HeaderMobile />
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </main>
    </>
  );
}
