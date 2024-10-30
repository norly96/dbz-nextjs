import Image from "next/image";
import background from "@/assets/back.svg";
import Link from "next/link";
import { Character } from "../../app/interfaces";

interface CharacterProps {
  character: Character;
}

const ItemCharacter = ({ character }: CharacterProps) => {
  return (
    <div className="relative flex flex-col w-96 items-center p-4">
      <Image
        src={background}
        width={100}
        height={100}
        alt="Fondo"
        className="absolute top-0 left-0 object-cover w-full h-full shadow-lg rounded-xl"
      />
      {/* Imagen */}
      <Link href={`personaje/${character.id}`} className="w-auto h-96 z-10 ">
        <Image
          src={character.image}
          alt={`Imagen de ${character.name}`}
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
        {character.name}
      </h2>
    </div>
  );
};

export default ItemCharacter;
