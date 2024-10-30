import ItemCharacter from "@/components/Characters/ItemCharacter";
import { Character } from "../interfaces";

const CharactersPage = async () => {
  let data = await fetch("https://dragonball-api.com/api/characters?limit=58");
  let char = await data.json();

  return (
    <main className="flex flex-wrap gap-5 min-h-full mt-8 justify-center p-4">
      {char.items.map((ch: Character) => (
        <ItemCharacter key={ch.id} character={ch} />
      ))}
    </main>
  );
};

export default CharactersPage;
