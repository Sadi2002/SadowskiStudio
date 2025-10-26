import Image from "next/image";
import Arrow from "../../../../public/right.svg";

export default function NavigationMenuMobile() {
  return (
    <div className="h-full w-full fixed top-0 left-0">
      <div className="bg-background w-full pt-[70px] pb-[25.5px] px-[12px] ">
        <div className="pl-[83px]">
          <a href="#" className="mb-[17px] block">
            <p className="text-[10px] text-[rgba(0,0,0,0.38)]">Szablony (01)</p>
            <div className="flex justify-between pb-[10px] items-center">
              <h4 className="text-text-color-navigation-dark text-[27px] font-light">
                Portfolio
              </h4>
              <span>
                <Image src={Arrow} alt="Strzalka" />
              </span>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] w-full h-[1px]"></div>
          </a>
          <a href="#" className="mb-[17px] block">
            <p className="text-[10px] text-[rgba(0,0,0,0.38)]">Kim jestem</p>
            <div className="flex justify-between pb-[10px] items-center">
              <h4 className="text-text-color-navigation-dark text-[27px] font-light">
                O mnie
              </h4>
              <span>
                {" "}
                <Image src={Arrow} alt="Strzalka" />
              </span>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] w-full h-[1px]"></div>
          </a>
          <a href="#" className="mb-[17px] block">
            <p className="text-[10px] text-[rgba(0,0,0,0.38)]">
              Napisz do mnie
            </p>
            <div className="flex justify-between pb-[10px] items-center">
              <h4 className="text-text-color-navigation-dark text-[27px] font-light">
                Kontakt
              </h4>
              <span>
                {" "}
                <Image src={Arrow} alt="Strzalka" />
              </span>
            </div>
            <div className="bg-[rgba(0,0,0,0.1)] w-full h-[1px]"></div>
          </a>
        </div>
        <div className="pl-[83px]">
          <p className="text-[9px] font-light text-[rgba(0,0,0,0.90)]">
            Projektuję nowoczesne strony, które zachwycają swoim wyglądem
          </p>
          <div className="mt-[50px]">
            <p className="flex gap-[10px]">
              <a
                href="#"
                className="text-[9px] font-light text-[rgba(0,0,0,0.90)]"
              >
                kontakt@sadowskistudio.com
              </a>
              <a
                href="#"
                className="text-[9px] font-light text-[rgba(0,0,0,0.90)]"
              >
                2025 Sadowski
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute top-0 left-0 -z-10"></div>
    </div>
  );
}
