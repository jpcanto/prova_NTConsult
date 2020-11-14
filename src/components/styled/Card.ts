import styled from 'styled-components';

interface cardProps {
    image?: string,
    fontSize?: string,
    paddingTop?: string
}

export const CardContainer = styled.div<cardProps>`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: ${props => props.paddingTop};
`;

export const CardBoxContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const CardTitle = styled.h1<cardProps>`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${props => `${props.fontSize}em`};

    margin-bottom: 8vh;
`;

export const CardBox = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 20vw;
`;

export const Card = styled.div<cardProps>`
    background: ${props => `url(${props.image})`} no-repeat center;
    background-size: contain;
    cursor: pointer;
    display: flex;
    height: 30vh;
    margin: auto 15px;
    width: 20vw;

    &:hover {
        border-radius: 5px;
        box-shadow: inset 0px 0px 0px 3px #fff;
        + .description {
            color: #fff;
        }
    }

    + .description {
      color: grey;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.2em;

      margin-top: 10px;
    }
`;