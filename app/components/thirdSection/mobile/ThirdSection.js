import Box from "../Box";

const sections = [
  {
    number: 1,
    title: "Interaktywny design UX/UI",
    textLines: [
      "Przekształcam pomysły i wizje w intuicyjne,",
      "efektowne strony 3D, które zachwycają i",
      "dają przewagę nad konkurencją.",
    ],
  },
  {
    number: 2,
    title: "Projektowanie stron",
    textLines: [
      "Tworzone, by upraszczać skomplikowane pomysły,",
      "moje strony 3D zamieniają wizje w efektowne i",
      "intuicyjne interaktywne doświadczenia.",
    ],
  },
  {
    number: 3,
    title: "Strony i aplikacje",
    textLines: [
      "Tworzone, by zachwycać i wyróżniać Twoją markę,",
      "moje strony angażują użytkowników, a",
      "jednocześnie rosną wraz z Twoim biznesem.",
    ],
  },
  {
    number: 4,
    title: "Identyfikacja Marki",
    textLines: [
      "Od koncepcji po wizualny design, każda marka",
      " jest tworzona tak, by wyróżniać się i robić wrażenie",
      "na wszystkich platformach cyfrowych",
    ],
  },
];

export default function ThirdSection() {
  return (
    <section>
      <div>
        {sections.map((section) => (
          <Box
            key={section.number}
            number={section.number}
            title={section.title}
            textLines={section.textLines}
          />
        ))}
      </div>
    </section>
  );
}
