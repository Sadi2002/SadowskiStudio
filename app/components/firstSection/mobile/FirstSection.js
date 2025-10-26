import Image from "next/image";
import backgroundImage from "../../../../public/tlo.avif";

export default function FirstSection() {
  return (
    <section className="pt-[76px]">
      <div className="mx-[12px] pb-[30px]">
        <h1 className="text-[40px] text-[rgb(51,51,53)] font-light tracking-[-1px] leading-[43px]">
          Strony 3D z efektem WOW
        </h1>
      </div>
      <div className="mx-[12px] flex flex-col gap-[40px] pb-[30px]">
        <p className="text-[12px] text-text-color font-light leading-[18px] tracking-tight">
          <span>Tworzę efektowne strony 3D, </span>
          <span>które wyróżniają Twoją markę i przyciągają klientów, </span>
          <span>
            łącząc nowoczesny design z interaktywnymi doświadczeniami,{" "}
          </span>
          <span>
            dzięki czemu wyprzedzasz konkurencję i rośniesz razem z biznesem.
          </span>
        </p>
        <div>
          <p className="text-[12px] font-light">Zobacz więcej</p>
        </div>
      </div>
      <div className="h-[380px] relative w-full -z-1">
        <Image
          src={backgroundImage}
  quality={75}
          fill
          alt="zdjęcie tabletu na środku"
          className="object-cover"
        />
      </div>
    </section>
  );
}
