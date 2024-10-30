import { Metadata } from "next";
import { Character } from "../../interfaces";
import { describe } from "node:test";

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
    <main>
      Personaje {character.id}
      <div>{character.name}</div>
    </main>
  );
};

export default CharacterPage;
