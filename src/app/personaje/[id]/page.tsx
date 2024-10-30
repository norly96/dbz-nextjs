import { Metadata } from "next";
import { Character } from "../../interfaces";
import Image from "next/image";
import background from "@/assets/back.svg";
import Link from "next/link";
import { affiliationChange, genderChange, raceChange } from "@/utils/methods";

interface Props {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const character = await getCharacter((await params).id);
  return {
    title: `#${character.id} - Personaje ${character.name}`,
    description: `Descripción de ${character.name}`,
  };
};

const getCharacter = async (id: string): Promise<Character> => {
  try {
    let character = await fetch(
      `https://dragonball-api.com/api/characters/${id}`
    );
    let char = await character.json();

    return char;
  } catch (error) {
    throw new Error("Error");
  }
};

const CharacterPage = async (props: Props) => {
  const params = await props.params;
  const character = await getCharacter(params.id);

  return (
    <main className="flex flex-grow min-h-full p-10">
      <section className=" relative flex w-full items-center p-4">
        {/* Fondo Imagen */}
        <Image
          src={background}
          width={100}
          height={100}
          alt="background"
          className="absolute top-0 left-0 object-cover w-full h-full shadow-lg rounded-xl"
        />
        <div className="flex flex-wrap w-full justify-between">
          {/* Imagen */}
          <div className="z-10 ml-20">
            <Image
              src={character.image}
              alt={`Image of ${character.name}`}
              width={150}
              height={150}
              style={{ objectFit: "cover" }}
              className="w-full h-full z-0 drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform duration-300 "
              quality={80}
              priority={false}
            />
          </div>

          {/* Datos */}
          <article className="flex flex-col w-6/12 z-10">
            <h2 className="text-7xl font-semibold capitalize text-center text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              {" "}
              {character.name}
            </h2>
            <div className="flex flex-col">
              <div className="flex items-center">
                <h3 className="text-2xl text-red-600">Ki:</h3>
                <p className="text-lg font-mono ml-2 font-bold ">
                  {character.ki}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-2xl text-red-600">Ki Máximo:</h3>
                <p className="text-lg font-mono ml-2 font-bold ">
                  {character.maxKi}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-2xl text-red-600">Raza:</h3>
                <p className="text-lg font-mono ml-2 font-bold ">
                  {raceChange(character)}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-2xl text-red-600">Género:</h3>
                <p className="text-lg font-mono ml-2 font-bold ">
                  {genderChange(character)}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-2xl text-red-600">Afiliación:</h3>
                <p className="text-lg font-mono ml-2 font-bold ">
                  {affiliationChange(character)}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-2xl text-red-600">Planeta de origen:</h3>
                <p className="text-lg font-mono ml-2 font-bold ">
                  {character.originPlanet.name}
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-lg">
                  <span className="text-2xl text-red-600">Descripción:</span>
                  <span className="font-mono ml-2 font-bold">
                    {character.description}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default CharacterPage;
