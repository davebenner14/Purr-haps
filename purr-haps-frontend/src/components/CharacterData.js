import FighterImage from "../assets/images/Chars/Fight.png";
import PaladinImage from "../assets/images/Chars/Pal.png";
import RangerImage from "../assets/images/Chars/Ran.png";
import RogueImage from "../assets/images/Chars/Rog.png";
import WizardImage from "../assets/images/Chars/Wiz.png";
import HoodieImage from "../assets/images/shirts/Hoodie.png";
import TshirtImage from "../assets/images/shirts/Tshirt.png";
import ZipUpImage from "../assets/images/shirts/ZipUp.png";

const generateRandomName = () => {
  const firstNames = ["Thorin", "Elara", "Gorim", "Lyria", "Durnan"];
  const lastNames = [
    "Ironfist",
    "Moonshadow",
    "Stoneshield",
    "Brightblade",
    "Shadowalker"
  ];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

export const characters = [
  {
    name: generateRandomName(),
    job: "Fighter",
    image: FighterImage,
    attributes: {
      Strength: 18,
      Dexterity: 14,
      Constitution: 16,
      Intelligence: 10,
      Wisdom: 12,
      Charisma: 13
    }
  },
  {
    name: generateRandomName(),
    job: "Paladin",
    image: PaladinImage,
    attributes: {
      Strength: 17,
      Dexterity: 12,
      Constitution: 15,
      Intelligence: 10,
      Wisdom: 14,
      Charisma: 16
    }
  },
  {
    name: generateRandomName(),
    job: "Ranger",
    image: RangerImage,
    attributes: {
      Strength: 15,
      Dexterity: 18,
      Constitution: 14,
      Intelligence: 12,
      Wisdom: 14,
      Charisma: 10
    }
  },
  {
    name: generateRandomName(),
    job: "Rogue",
    image: RogueImage,
    attributes: {
      Strength: 12,
      Dexterity: 20,
      Constitution: 13,
      Intelligence: 14,
      Wisdom: 10,
      Charisma: 16
    }
  },
  {
    name: generateRandomName(),
    job: "Wizard",
    image: WizardImage,
    attributes: {
      Strength: 8,
      Dexterity: 12,
      Constitution: 10,
      Intelligence: 20,
      Wisdom: 18,
      Charisma: 12
    }
  }
];

const availableSizes = ["S", "M", "L", "XL", "XXL"];

export const shirts = [
  {
    name: "Hoodie",
    image: HoodieImage,
    sizes: availableSizes
  },
  {
    name: "T-shirt",
    image: TshirtImage,
    sizes: availableSizes
  },
  {
    name: "Zip-Up",
    image: ZipUpImage,
    sizes: availableSizes
  }
];
