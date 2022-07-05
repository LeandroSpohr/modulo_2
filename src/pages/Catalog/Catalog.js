import React, { useEffect, useState, useRef } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import Title from '../../components/atoms/Title'
import List from '../../components/molecules/List'

function Catalog() {
  const [popularMovies, setPopularMovies] = useState([])
  const listaRef = useRef()

  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => {
        const movieImgs = response.results.map((result) => {
          return imgUrl + result.poster_path
        })
        console.log(movieImgs)
        setPopularMovies(movieImgs)
      })
  }, [])

  return <>
    <Title>Catalogo</Title>
    <List moviesImg={popularMovies} />
  </>
}

export default Catalog