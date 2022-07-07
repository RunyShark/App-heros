import { heroes } from "../";
export const getHeroById = (id) => {
  const hero = heroes.find((heroId) => heroId.id === id);
  if (!hero) {
    throw new Error(`Algo salio mal ${id} no valido`);
  }
  return hero;
};
