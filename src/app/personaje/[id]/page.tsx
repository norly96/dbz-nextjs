import { Metadata } from "next";
import { Character } from "../../interfaces";
import Image from "next/image";
import background from "@/assets/back.svg";
import {
  affiliationChange,
  genderChange,
  kiChange,
  maxkiChange,
  raceChange,
} from "@/utils/methods";
import ItemsTransformation from "@/components/Characters/ItemsTransformation";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

//build time
export const generateStaticParams = async () => {
  const response = await fetch(
    "https://dragonball-api.com/api/characters?limit=58"
  );
  const characters = await response.json();

  // Extraer solo los IDs de los personajes
  const charIDs58 = characters.items.map(
    (character: Character) => character.id
  );

  return charIDs58.map((id: number) => ({
    id: id.toString(),
  }));
};

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
    const character = await fetch(
      `https://dragonball-api.com/api/characters/${id}`
    );
    if (!character.ok) throw new Error("Personaje no encontrado");
    const char = await character.json();
    return char;
  } catch (error) {
    console.log(error);
    notFound();
  }
};

const CharacterPage = async (props: Props) => {
  const params = await props.params;
  const character = await getCharacter(params.id);

  return (
    <main className="flex flex-col flex-grow min-h-full mt-8 sm:p-10">
      <section className=" relative flex w-full items-center p-4">
        {/* Fondo Imagen */}
        <Image
          src={background}
          width={100}
          height={100}
          alt="Fondo"
          className="absolute top-0 left-0 object-cover w-full h-full shadow-lg rounded-xl"
        />
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start lg:my-8 lg:justify-between">
          {/* Imagen */}
          <article className="z-10 w-2/3 lg:w-5/12 lg:ml-20 lg:h-[650px]">
            <Image
              src={character.image}
              alt={`Imagen de ${character.name}`}
              width={150}
              height={150}
              className="w-full h-full z-0 object-cover lg:object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] hover:scale-110 transition-transform duration-300 "
              quality={80}
              priority={false}
            />
          </article>

          {/* Datos */}
          <article className="flex flex-col lg:ml-5 w-full lg:w-6/12 z-10">
            <h2 className=" text-5xl mt-3 sm:text-7xl font-semibold capitalize text-center text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
              {" "}
              {character.name}
            </h2>
            <div className="flex flex-col px-1 sm:px-4 lg:items-start">
              <div className="flex items-center">
                <h3 className="text-xl lg:text-2xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  Ki:
                </h3>
                <p className="text-sm lg:text-lg font-mono ml-2 font-bold ">
                  {kiChange(character)}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-xl lg:text-2xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  Ki Máximo:
                </h3>
                <p className="text-sm lg:text-lg font-mono ml-2 font-bold ">
                  {maxkiChange(character)}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-xl lg:text-2xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  Raza:
                </h3>
                <p className="text-sm lg:text-lg font-mono ml-2 font-bold ">
                  {raceChange(character)}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-xl lg:text-2xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  Género:
                </h3>
                <p className="text-sm lg:text-lg font-mono ml-2 font-bold ">
                  {genderChange(character)}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-xl lg:text-2xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  Afiliación:
                </h3>
                <p className="text-sm lg:text-lg font-mono ml-2 font-bold ">
                  {affiliationChange(character)}
                </p>
              </div>
              <div className="flex items-center">
                <h3 className="text-xl lg:text-2xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  Planeta de origen:
                </h3>
                <p className="text-sm lg:text-lg font-mono ml-2 font-bold ">
                  {character.originPlanet.name}
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-sm lg:text-lg max-w-full lg:w-full">
                  <span className="text-xl lg:text-2xl text-red-600 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                    Descripción:
                  </span>
                  <span className="font-mono ml-2 font-bold">
                    {character.description}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      {character.transformations.length === 0 ? null : (
        <ItemsTransformation character={character} />
      )}
    </main>
  );
};

export default CharacterPage;
