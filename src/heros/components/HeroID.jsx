import { useParams, Navigate, useNavigate } from "react-router";
import { getHeroById } from "../";

export const HeroID = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = getHeroById(id);
  const onNavigateBack = () => {
    navigate(-1);
  };

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  const pathImgByHero = `../../../assets/heroes/${id}.jpg`;
  if (!hero) {
    return <Navigate to="/" />;
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={pathImgByHero} alt={superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p>
              <b>Editorial: </b>
              {publisher}
            </p>
          </li>
          <li className="list-group-item">
            {" "}
            <p>
              {" "}
              <b>person: </b> {alter_ego}
            </p>
          </li>
          <li className="list-group-item">
            <p>
              <b>Primera apracion: </b> {first_appearance}
            </p>
          </li>
        </ul>
        <h5 className="mt-3">
          {characters.split(",").length > 1 ? "Actores" : "Actor"}
        </h5>
        <p>{characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
