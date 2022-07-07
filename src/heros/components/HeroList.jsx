import { getHeroesByPrblisher, HeroCard } from "../";

export const HeroList = ({ publisher }) => {
  const heros = getHeroesByPrblisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heros?.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
