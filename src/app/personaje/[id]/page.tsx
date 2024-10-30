import { Character } from "../../interfaces";

interface Props {
  params: { id: string };
}

const getCharacter = async (id: string): Promise<Character> => {
  try {
    let character = await fetch(
      `https://dragonball-api.com/api/characters/${id}`
    );
    let char = await character.json();

    return char;
  } catch (error) {
    throw new Error("");
  }
};

const CharacterPage = async ({ params }: Props) => {
  const character = await getCharacter(params.id);
  return (
    <main>
      Personaje {character.id}
      <div>{character.name}</div>
    </main>
  );
};

export default CharacterPage;
