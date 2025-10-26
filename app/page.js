"use client";

import FirstSection from "./components/firstSection/mobile/FirstSection";
import HeaderMobile from "./components/header/mobile/HeaderMobile";
import SecondSection from "./components/secondSection/mobile/SecondSection";
import ThirdSection from "./components/thirdSection/mobile/ThirdSection";

export default function Home() {

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
