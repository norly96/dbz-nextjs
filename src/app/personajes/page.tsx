import { Character } from "../interfaces";
import Image from "next/image";
import background from "@/assets/back.svg";
import Link from "next/link";

const CharactersPage = async () => {
  let data = await fetch("https://dragonball-api.com/api/characters?limit=58");
  let char = await data.json();

  return (
    <main className="flex flex-wrap gap-5 min-h-full mt-8 justify-center p-4">
      {char.items.map((ch: Character) => (
        <div
          key={ch.id}
          className=" relative flex flex-col w-96 items-center p-4"
        >
          <Image
            src={background}
            width={100}
            height={100}
            alt="background"
            className="absolute top-0 left-0 object-cover w-full h-full shadow-lg rounded-xl"
          />
          {/* Imagen */}
          <Link href={`personaje/${ch.id}`} className="w-auto h-96 z-10 ">
            <Image
              src={ch.image}
              alt={`Image of ${ch.name}`}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              className="w-full h-full z-0 drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform duration-300 "
              quality={80}
              priority={false}
            />
          </Link>

          {/* Nombre */}
          <h2 className="text-4xl font-semibold capitalize text-center text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
            {" "}
            {ch.name}
          </h2>
        </div>
      ))}
    </main>
  );
};

export default CharactersPage;
