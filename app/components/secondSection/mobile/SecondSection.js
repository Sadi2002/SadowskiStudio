import Image from "next/image";
import Arrow from "../../../../public/right.svg";

export default function SecondSection() {
  return (
    <section className="py-[89.3px] mx-[12px] ">
      <div>
        <div>
          <div className="flex items-center gap-[10px]">
            <span className="w-[5px] h-[5px]  bg-circle-color block rounded-2xl"></span>
            <span className="text-circle-color font-light text-[12px]">
              Moja misja
            </span>
          </div>
          <h4 className="text-[26px] font-light mt-[30px] leading-[35px] tracking-[-1px]">
            <span className="block">Wyprzedź konkurencję</span>
            <span className="block">tworząc strony 3D,</span>
            <span className="block">które zachwycają</span>
            <span className="block">i angażują w</span>
            <span className="block">doświadczenia łączące</span>
            <span className="block">piękno z funkcjonalnością</span>
          </h4>
        </div>
        <div className="mt-[30px]">
          <p className="text-[12px] text-text-color font-light tracking-[-0.6px] leading-[18px]">
            <span className="block">
              Moje projekty 3D zdobyły uznanie klientów
            </span>
            <span className="block">
              w branży, wyróżniając się nowoczesnym designem i interaktywnymi
              doświadczeniami pokazując moje
            </span>
            <span className="block">zaangażowanie w tworzenie stron, </span>
            <span className="block">które robią wrażeni</span>
          </p>
        </div>
        <div className="mt-[44.6px] flex gap-[30px]">
          <a
            href="#"
            className=" relative flex font-light text-[14.8px] gap-[7px] after:content-[''] after:absolute after:h-[1px] after:w-full after:bottom-[-2px] after:left-0 after:bg-text-color"
          >
            Moje doświadczenie <Image src={Arrow} width={15} alt="strzalka" />
          </a>
          <a
            href="#"
            className=" relative flex font-light text-[14.8px] gap-[7px] after:content-[''] after:absolute after:h-[1px] after:w-full after:bottom-[-2px] after:left-0 after:bg-text-color"
          >
            Zapytaj <Image src={Arrow} width={15} alt="strzalka" />
          </a>
        </div>
      </div>
    </section>
  );
}
