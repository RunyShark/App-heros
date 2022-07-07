import { useParams } from "react-router";
import { getHeroById } from "../";

export const HeroID = () => {
  const { id } = useParams();
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    getHeroById(id);
  const pathImgByHero = `../../../assets/heroes/${id}.jpg`;
  return (
    <>
      <h2>{superhero}</h2>
      <h3>Editorial: {publisher}</h3>
      <img src={pathImgByHero} alt={superhero} />
      <h4>person: {alter_ego}</h4>
      <p>Actores que han intnerpretado al super heroe: {characters}</p>
      <p>Primera apracion: {first_appearance}</p>
    </>
  );
};
