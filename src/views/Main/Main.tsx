import React from 'react';

import { Card, CardBox, CardBoxContainer, CardContainer, CardTitle } from '../../components/styled/Card';
import { useHistory } from "react-router-dom";
import anakin from '../../assets/img/anakin.png';
import leia from '../../assets/img/leia.png';
import luke from '../../assets/img/luke.png';
import obiwan from '../../assets/img/obiwan.png';

const Main: React.FC = () => {

  const history = useHistory();

  function handleClick() {
    history.push('/films');
  }

  return <>
    <CardContainer paddingTop="20vh">
      <CardTitle fontSize="4.2">Who's watching?</CardTitle>
      <CardBoxContainer main={true}>
        <CardBox width="12vw" bShadow={true} onClick={handleClick}>
          <Card
            border="full"
            width="12vw"
            bShadow={true}
            bgColor="#f5f781"
            image={luke}>
          </Card>
          <div className="title">Luke Skywalker</div>
        </CardBox>
        <CardBox width="12vw" bShadow={true} onClick={handleClick}>
          <Card
            border="full"
            width="12vw"
            bShadow={true}
            bgColor="#71280d"
            image={anakin}>
          </Card>
          <div className="title">Anakin Skywalker</div>
        </CardBox>
        <CardBox width="12vw" bShadow={true} onClick={handleClick}>
          <Card
            border="full"
            width="12vw"
            bShadow={true}
            bgColor="#232aff"
            image={leia}>
          </Card>
          <div className="title">Leia Organa</div>
        </CardBox>
        <CardBox width="12vw" bShadow={true} onClick={handleClick}>
          <Card
            border="full"
            width="12vw"
            bShadow={true}
            bgColor="#53c76c"
            image={obiwan}>
          </Card>
          <div className="title">Obiwan Kenobi</div>
        </CardBox>
      </CardBoxContainer>
    </CardContainer>
  </>;
}

export default Main;