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
      Strength: 18,
      Dexterity: 17,
      Constitution: 16,
      Intelligence: 14,
      Wisdom: 15,
      Charisma: 20
    }
  },
  {
    name: "Legolas",
    job: "Archer",
    image: LegolasImage,
    attributes: {
      Strength: 15,
      Dexterity: 20,
      Constitution: 14,
      Intelligence: 16,
      Wisdom: 17,
      Charisma: 18
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
