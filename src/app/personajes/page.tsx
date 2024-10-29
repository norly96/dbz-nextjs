import { Character } from "../interfaces";
import Image from "next/image";

const CharactersPage = async () => {
  let data = await fetch("https://dragonball-api.com/api/characters?limit=58");
  let char = await data.json();
  return (
    <main className="flex flex-wrap gap-5 min-h-full mt-8 justify-center p-4">
      {char.items.map((ch: Character) => (
        <div
          key={ch.id}
          className=" bg-[#ffb710] flex flex-col w-96 items-center p-4 shadow-lg rounded-xl"
        >
          {/* Imagen */}
          <div className="w-auto h-96 z-10 ">
            <Image
              src={ch.image}
              alt={`Image of ${ch.name}`}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              className="w-full h-full z-0 drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform duration-300 "
              quality={80}
            />
          </div>

          {/* Nombre */}
          <h2 className="text-4xl font-semibold text-center text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
            {" "}
            {ch.name}
          </h2>
        </div>
      ))}
    </main>
  );
};

export default CharactersPage;
