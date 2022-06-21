import React, {useEffect} from 'react'
import * as ApiTmbService from '../../services/apiTmdb'

function Catalog () {
  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => console.log(response))
  }, [])

  return <h1>Catalogo</h1>
}

export default Catalog