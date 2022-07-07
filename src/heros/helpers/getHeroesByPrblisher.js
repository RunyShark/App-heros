import { heroes } from "../";

export const getHeroesByPrblisher = (publisher) => {
  console.log("Tonto polla");
  const validPublichers = ["DC Comics", "Marvel Comics"];
  if (!validPublichers.includes(publisher)) {
    throw new Error(`${publisher} es una editorial no permitida`);
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};
