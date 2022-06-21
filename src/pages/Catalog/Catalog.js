import React, { useEffect, useState } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'

function Catalog() {
  const [popularMovies, setPopularMovies] = useState([])

  const imgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'

  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => setPopularMovies(response.results))
  }, [])

  return <>
    <h1>Catalogo</h1>
    <div>
      <h2>Populares</h2>
      {
        popularMovies.map((popularMovie) => {
          return <>
            <h5>{popularMovie.title}</h5>
            <img src={imgUrl + popularMovie.poster_path} alt={popularMovie.title} />
          </>
        })
      }
    </div>
  </>
}

export default Catalog