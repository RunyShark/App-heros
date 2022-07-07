import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { useForm, HeroCard } from "../";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name = "", asc } = queryString.parse(location.search);
  const { searchText, onChangeForm, onResetForm } = useForm({
    searchText: "",
  });

  const hadleOnSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?name=${searchText}`);
    onResetForm();
  };

  return (
    <>
      <h1>Busqueda</h1>
      <hr />

      <div className="row">
        {" "}
        <div className="col-5">
          <h4>Busquedas</h4>
          <hr />
          <form onSubmit={hadleOnSubmit}>
            <input
              type="text"
              placeholder="Busca tu heroe"
              name="searchText"
              value={searchText}
              autoComplete="off"
              onChange={onChangeForm}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />
          <div className="alert alert-primary">Heroe</div>
          <div className="alert alert-danger">
            No se encontro el heroe <b>{name}</b>
          </div>
          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
