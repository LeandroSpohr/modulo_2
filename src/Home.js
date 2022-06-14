import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useFormik } from 'formik';
import { TextField, Button, Grid, Paper } from '@mui/material';

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

  const formik = useFormik({
    initialValues: {
      email: 'teste@teste.com',
      senha: '',
    },
    onSubmit: search,
  });

  const { handleChange, values, handleSubmit } = formik
  const { email, senha } = values

  function search(values) {
    alert(JSON.stringify(values, null, 2));
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: '100vh',
        }}
      >
        <Grid item >
          <form onSubmit={handleSubmit}>
            <Paper
              sx={{
                padding: 3,
              }}
            >
              <Grid
                container
                justifyContent="center"
                spacing={2}
                direction="column"
              >
                <Grid item>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    onChange={handleChange}
                    value={email}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="password"
                    name="senha"
                    type="password"
                    label="Senha"
                    onChange={handleChange}
                    value={senha}
                  />
                </Grid>

                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </Grid >
    </>
  );
}

export function Teste() {
  return <h1>Teste</h1>
}

export default Home
