import React, { useEffect, useState, useRef } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import Title from '../../components/atoms/Title'

function Catalog() {
  const [popularMovies, setPopularMovies] = useState([])
  const listaRef = useRef()

  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  function scroll(x) {
    listaRef.current.scrollTo({
      left: x,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => setPopularMovies(response.results))
  }, [])

  return <>
    <h1>Catalogo</h1>
    <div className='categoria'>
      <h2 className='categoria-titulo'>Populares</h2>
      <Title>Populares</Title>
      <Title>teste</Title>
      <div
        className='categoria-lista'
        ref={listaRef}
      >
        <button
          className='botao-lista categoria-esquerda'
          onClick={() => scroll(-500)}
        >
          <MdOutlineArrowBackIosNew className='icone' size={35} />
        </button>
        {
          popularMovies.map((popularMovie) => {
            return <>
              <img src={imgUrl + popularMovie.poster_path} alt={popularMovie.title} />
            </>
          })
        }
        <button
          className='botao-lista categoria-direita'
          onClick={() => scroll(500)}
        >
          <MdOutlineArrowForwardIos className='icone' size={35} />
        </button>
      </div>
    </div>
  </>
}

export default Catalog