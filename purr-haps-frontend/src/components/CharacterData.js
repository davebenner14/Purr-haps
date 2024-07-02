import AragornImage from "../assets/images/Aragorn.png";
import LegolasImage from "../assets/images/Legolas.png";
import DragonShirtImage from "../assets/images/DragonShirt.png";
import KnightShirtImage from "../assets/images/KnightShirt.png";

export const characters = [
  {
    name: "Aragorn",
    job: "Ranger",
    image: AragornImage,
    attributes: {
      strength: 18,
      dexterity: 17,
      constitution: 16,
      intelligence: 14,
      wisdom: 15,
      charisma: 20
    }
  },
  {
    name: "Legolas",
    job: "Archer",
    image: LegolasImage,
    attributes: {
      strength: 15,
      dexterity: 20,
      constitution: 14,
      intelligence: 16,
      wisdom: 17,
      charisma: 18
    }
  }
  // Add more characters as needed
];

export const shirts = [
  {
    name: "Dragon T-shirt",
    image: DragonShirtImage,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    name: "Knight T-shirt",
    image: KnightShirtImage,
    sizes: ["S", "M", "L", "XL"]
  }
  // Add more shirts as needed
];
