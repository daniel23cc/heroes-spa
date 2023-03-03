import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../auth/hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string"
import { getHeroesByName } from "../helpers"


export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  //console.log({ q })
  const heroes = getHeroesByName(q)

  const showSearch = q.length === 0
  const showError = q.length > 0 && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault()
    //if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`)

  }

  return (
    <>
      <h1>Buscar</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Búsqueda</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />


            <button className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {/*  {
            (q === '')
              ? <div className="alert alert-primary">Buscar un heroe</div>
              : (heroes.length === 0)
              && <div className="alert alert-danger">No existe el heroe <b>{q}</b></div>
          } */}

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
            Buscar un heroe
          </div>

          <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__bounce" style={{ display: showError ? '' : 'none' }}>
            No existe el heroe <b>{q}</b>
          </div>


          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>


      </div>
    </>
  )
}
