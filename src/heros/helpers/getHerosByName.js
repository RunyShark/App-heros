import { heroes } from "../";
export const getHerosByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return [];

  return heroes.filter((heros) =>
    heros.superhero.toLocaleLowerCase().includes(name)
  );
};
