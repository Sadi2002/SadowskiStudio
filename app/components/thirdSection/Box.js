import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export default function SectionBlock({ number, title, textLines }) {
  return (
    <div className="border-t border-[rgba(0,0,0,0.1)] px-[12px] pb-[30px]">
      <h3
        className={`text-[178px] font-normal text-text-color-navigation-dark -ml-[3px] leading-[178px] ${geist.className}`}
      >
        {number}
      </h3>
      <h4 className="text-[26.7px] my-[50px] font-light">{title}</h4>
      <div>
        <p className="font-light text-[12px] text-text-color">
          {textLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
