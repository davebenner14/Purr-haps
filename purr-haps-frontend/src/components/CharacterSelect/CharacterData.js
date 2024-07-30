import FighterImage from "../../assets/images/Chars/Fight.png";
import PaladinImage from "../../assets/images/Chars/Pal.png";
import RangerImage from "../../assets/images/Chars/Ran.png";
import RogueImage from "../../assets/images/Chars/Rog.png";
import WizardImage from "../../assets/images/Chars/Wiz.png";
import HoodieImage from "../../assets/images/shirts/Hoodie.png";
import TshirtImage from "../../assets/images/shirts/Tshirt.png";
import ZipUpImage from "../../assets/images/shirts/ZipUp.png";

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
      STR: 18,
      DEX: 14,
      CON: 16,
      INT: 10,
      WIS: 12,
      CHR: 13
    }
  },
  {
    name: generateRandomName(),
    job: "Paladin",
    image: PaladinImage,
    attributes: {
      STR: 17,
      DEX: 12,
      CON: 15,
      INT: 10,
      WIS: 14,
      CHR: 16
    }
  },
  {
    name: generateRandomName(),
    job: "Ranger",
    image: RangerImage,
    attributes: {
      STR: 15,
      DEX: 18,
      CON: 14,
      INT: 12,
      WIS: 14,
      CHR: 10
    }
  },
  {
    name: generateRandomName(),
    job: "Rogue",
    image: RogueImage,
    attributes: {
      STR: 12,
      DEX: 20,
      CON: 13,
      INT: 14,
      WIS: 10,
      CHR: 16
    }
  },
  {
    name: generateRandomName(),
    job: "Wizard",
    image: WizardImage,
    attributes: {
      STR: 8,
      DEX: 12,
      CON: 10,
      INT: 20,
      WIS: 18,
      CHR: 12
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
