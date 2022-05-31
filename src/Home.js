import React, {useState, useEffect} from "react";
import axios from 'axios'

function Home() {
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios.get('https://goweather.herokuapp.com/weather/Curitiba')
      .then((response) => {
        setTemp(response.data.temperature)
        setWeather(response.data)
      })
  }, []);

  return (
    <div>
      <p>Temperatura: {temp}</p>
      <p>Vento: {weather && weather.wind}</p>
      <p>Condição: {weather && weather.description}</p>
    </div>
  );
}

export function Teste() {
  return <h1>Teste</h1>
}

export default Home
