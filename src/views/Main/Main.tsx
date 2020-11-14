import React from 'react';

import { Card, CardBox, CardBoxContainer, CardContainer, CardTitle } from '../../components/styled/Card';
import { useHistory } from "react-router-dom";
import anakin from '../../assets/img/anakin.png';
import leia from '../../assets/img/leia.png';
import luke from '../../assets/img/luke.png';
import obiwan from '../../assets/img/obiwan.png';

const Main: React.FC = () => {

  let history = useHistory();

  function handleClick() {
    history.push('/films');
  }

  return <>
    <CardContainer paddingTop="5vh">
      <CardTitle fontSize="4.2">Who's watching?</CardTitle>
      <CardBoxContainer>
        <CardBox onClick={handleClick}>
          <Card bgColor="#f5f781" image={luke}></Card>
          <div className="description">Luke Skywalker</div>
        </CardBox>
        <CardBox onClick={handleClick}>
          <Card bgColor="#71280d" image={anakin}></Card>
          <div className="description">Anakin Skywalker</div>
        </CardBox>
        <CardBox onClick={handleClick}>
          <Card bgColor="#232aff" image={leia}></Card>
          <div className="description">Leia Organa</div>
        </CardBox>
        <CardBox onClick={handleClick}>
          <Card bgColor="#53c76c" image={obiwan}></Card>
          <div className="description">Obiwan Kenobi</div>
        </CardBox>
      </CardBoxContainer>
    </CardContainer>
  </>;
}

export default Main;