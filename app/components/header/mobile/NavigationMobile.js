"use client";

import { useState } from "react";
import NavigationMenuMobile from "./NavigationMenuMobile";

export default function NavigationMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center ">
      <div className="flex justify-between items-center w-full fixed top-0 left-0 z-10 border-b-[rgba(0,0,0,0.1)] border-b ">
        <h2 className="py-1.5 px-[30px] text-text-color-navigation text-xs">
          SADOWSKI STUDIO
        </h2>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-[53px] h-[53px] border-[1px] border-[rgba(0,0,0,0.1)] border-b-0 border-t-0 relative flex flex-col justify-center items-center gap-[5px]"
        >
          <span
            className={`transition-all duration-1000 relative transform w-[26px] h-0.5 bg-text-color-navigation`}
          ></span>
          <span
            className={` transition-all duration-1000 relative transform w-[26px] h-0.5 bg-text-color-navigation`}
          ></span>
        </div>
      </div>
      {isOpen ? <NavigationMenuMobile /> : null}
    </nav>
  );
}
