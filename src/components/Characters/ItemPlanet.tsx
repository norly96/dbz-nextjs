import { Planet } from "@/app/interfaces";
import Image from "next/image";

interface PlanetProps {
  planet: Planet;
}

const ItemPlanet = ({ planet }: PlanetProps) => {
  return (
    <article className="flex relative flex-col w-96">
      <div className="my-4 px-4">
        <h1 className="text-4xl my-2 capitalize text-center text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
          {planet.name}
        </h1>
        <h2 className="font-mono text-black dark:text-white font-bold text-sm sm:text-md">
          {planet.description}
        </h2>
      </div>

      <Image
        src={planet.image}
        width={100}
        height={100}
        alt={`Planeta ${planet.name}`}
        quality={80}
        className="object-cover rounded-xl border-2 border-white w-96 h-72 "
      />
    </article>
  );
};

export default ItemPlanet;
