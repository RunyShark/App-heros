import { getHeroesByPrblisher, HeroItem } from "../";

export const HeroList = ({ publisher }) => {
  const heros = getHeroesByPrblisher(publisher);

  return (
    <>
      <hr />

      {heros?.map((hero) => (
        <HeroItem key={hero.id} {...hero} />
      ))}
    </>
  );
};
