import Discoveries from "./discoveries";

export default function Section() {
  const discoveries = [
    {
      header: "Jindal",
      desc: "Jai Jindal",
      childDesc: "Jai Jawan, Jai Kishan",
      hrefTo: "/jindal",
    },
    {
      header: "Jindal",
      desc: "Jai Jindal",
      childDesc: "Jai Jawan, Jai Kishan",
      hrefTo: "/jindal",
    },
    {
      header: "Jindal",
      desc: "Jai Jindal",
      childDesc: "Jai Jawan, Jai Kishan",
      hrefTo: "/jindal",
    },
    {
      header: "Jindal",
      desc: "Jai Jindal",
      childDesc: "Jai Jawan, Jai Kishan",
      hrefTo: "/jindal",
    },
  ];

  return (
    <div className="min-h-screen">
      <h2 className="scroll-m-20 text-center mb-10 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0">
        Madhusudhan Pathak Creations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto w-2/3">
        {discoveries.map((element, index) => (
          <div key={index}>
            <Discoveries
              header={element.header}
              desc={element.desc}
              childDesc={element.childDesc}
              hrefTo={element.hrefTo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
