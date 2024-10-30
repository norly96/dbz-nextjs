import React from "react";
import { Planet } from "../interfaces";
import ItemPlanet from "@/components/Characters/ItemPlanet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DBZ-Planetas",
  description: "Descubre los planetas icónicos del universo de Dragon Ball Z",
};

const PlanetPage = async () => {
  let data = await fetch("https://dragonball-api.com/api/planets?limit=20");
  let planet = await data.json();

  return (
    <main className="flex flex-wrap gap-5 min-h-full mt-8 justify-center p-4">
      {planet.items.map((p: Planet) => (
        <ItemPlanet key={p.id} planet={p} />
      ))}
    </main>
  );
};

export default PlanetPage;
