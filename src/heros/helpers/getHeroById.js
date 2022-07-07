import { heroes } from "../";
export const getHeroById = (id) => {
  return heroes.find((heroId) => heroId.id === id);
};
