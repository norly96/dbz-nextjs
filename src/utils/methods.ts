import { Character } from "@/app/interfaces";

export const kiChange = (character: Character) => {
  if (character.ki === "unknown") return "Desconocido";
  else return character.ki;
};
export const maxkiChange = (character: Character) => {
  if (character.maxKi === "unknown") return "Desconocido";
  else return character.maxKi;
};
export const genderChange = (character: Character) => {
  if (character.gender === "Male") return "Masculino";
  else if (character.gender === "Female") return "Femenino";
  else return "Desconocido";
};
export const raceChange = (character: Character) => {
  switch (character.race) {
    case "Human":
      return "Humano";
      break;
    case "Saiyan":
      return "Saiyan";
      break;
    case "Namekian":
      return "Namekiano";
      break;
    case "Majin":
      return "Majin";
      break;
    case "Frieza Race":
      return "Raza Freezer";
      break;
    case "Android":
      return "Android";
      break;
    case "Jiren Race":
      return "Raza Jiren";
      break;
    case "God":
      return "Dios";
      break;
    case "Angel":
      return "Ángel";
      break;
    case "Evil":
      return "Malvado";
      break;
    case "Nucleico":
      return "Nucleico";
      break;
    case "Nucleico benigno":
      return "Nucleico benigno";
      break;
    default:
      return "Desconocido";
      break;
  }
};
export const affiliationChange = (character: Character) => {
  switch (character.affiliation) {
    case "Z Fighter":
      return "Luchador Z";
      break;
    case "Red Ribbon Army":
      return "Ejército de la Cinta Roja";
      break;
    case "Namekian Warrior":
      return "Guerrero Namekiano";
      break;
    case "Freelancer":
      return "Freelancer";
      break;
    case "Army of Frieza":
      return "Ejército de Freezer";
      break;
    case "Pride Troopers":
      return "Soldados del orgullo";
      break;
    case "Assistant of Vermoud":
      return "Asistente de Vermoud";
      break;
    case "God":
      return "Dios";
      break;
    case "Assistant of Beerus":
      return "Asistente de Beerus";
      break;
    case "Villain":
      return "Villano";
      break;
    default:
      return "Otro";
      break;
  }
};
