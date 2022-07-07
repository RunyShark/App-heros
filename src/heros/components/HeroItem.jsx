export const HeroItem = ({
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <>
      <ul>
        <li>
          <h3>Super Heroe: {superhero}</h3>
          <p>Editorial: {publisher}</p>
          <p>Persona: {alter_ego}</p>
          <p>Comic: {first_appearance}</p>
          <p>img: {characters}</p>
        </li>
      </ul>
    </>
  );
};
