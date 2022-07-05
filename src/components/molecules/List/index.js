import React, {useRef} from "react"
import Title from "../../atoms/Title"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import Button from "../../atoms/Button"

function List(props) {
  const listaRef = useRef()

  function scroll(x) {
    listaRef.current.scrollBy({
      left: x,
      behavior: 'smooth',
    })
  }

  return (
  <div className='categoria'>
    <Title>Populares</Title>
    <div
      className='categoria-lista'
      ref={listaRef}
    >
      <Button
        className='botao-lista categoria-esquerda'
        onClick={() => scroll(-500)}
      >
        <MdOutlineArrowBackIosNew className='icone' size={35} />
      </Button>
      {
        props.moviesImg.map((movieImg, index) => {
          return <>
            <img src={movieImg} alt={index} />
          </>
        })
      }
      <Button
        className='botao-lista categoria-direita'
        onClick={() => scroll(500)}
      >
        <MdOutlineArrowForwardIos className='icone' size={35} />
      </Button>
    </div>
  </div>
  )
}

export default List