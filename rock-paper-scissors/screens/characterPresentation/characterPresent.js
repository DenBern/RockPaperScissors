import { scissorsRender } from "./scissors/scissorsRender.js";
import { rockRender } from "./rock/rockRender.js";
import { paperRender } from "./paper/paperRender.js";
import { nextCharacter } from "./nextCharacter/nextCharacter.js";
import { prevCharacter } from "./prevCharacter/prevCharacter.js";

export const characterPresent = () => {
  scissorsRender();
  rockRender();
  paperRender();
  nextCharacter();
  prevCharacter();
};