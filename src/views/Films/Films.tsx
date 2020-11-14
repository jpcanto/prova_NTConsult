import React, { useEffect, useState } from 'react';
import axios from 'axios';

import URL_API from '../../environment';
import { Card, CardBoxContainer } from '../../components/styled/Card';

interface IFilms {
  birth_year: String,
  created: String,
  edited: String,
  eye_color: String,
  films: [],
  gender: String,
  hair_color: String,
  height: String,
  homeworld: String,
  mass: String,
  name: String,
  skin_color: String,
  species: [],
  starships: [],
  url: String,
  vehicles: [],
}

const Films: React.FC = (props: any) => {
  const [films, setFilms] = useState<IFilms[]>([]);

  useEffect(() => {
    const url = URL_API.getFilms;
    async function getFilms() {
      try {
        const { data } = await axios.get(url);
        setFilms(data.results);
      } catch (error) {
        console.log('erro na requisição: ', url);
      }
    }
    getFilms();
  }, []);
  console.log(props.requestType)
  return <>
    <CardBoxContainer>
      {
        films.map((film, index) =>
          <Card key={index}>{film.name}</Card>
        )
      }
    </CardBoxContainer>
  </>;
}

export default Films;
