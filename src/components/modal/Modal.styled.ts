import styled from 'styled-components';
import { IModalStyled } from './Modal.interface';

export const ModalFade = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, .5);
    bottom: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 5;
`;

export const ModalContainer = styled.div`
    background: #121212;
    box-shadow: 1px 2px 8px 2px #1e1e1e;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    top: 5vh;
    width: 40%;
    z-index: 6;
`;

export const ModalWalppaper = styled.div<IModalStyled>`
    background: ${props => `url(${props.image})`} no-repeat center;
    background-size: cover;
    box-shadow: inset 0px -42px 36px -8px #121212, 0 42px 36px 8px #121212;
    display: block;
    height: 55%;
    width: 100%;
`;

export const ModalDescription = styled.div<IModalStyled>`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;

    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 10px 20px;
    width: 100%;

    p {
        margin-bottom: 5px;
    }

    > p:last-of-type {
        color: #29d429;
        font-weight: bold;

        margin-bottom: 5vh;
    }

    .flex:first-child {
        margin: 5vh 0;
    }

    .flex:not(:first-child) {
        margin-bottom: 5px;
    }

    .description {
        line-height: 1.40;
        margin-bottom: 30px;
        width: 90%;
    }

    .flex {
        align-items: center;
        display: flex;

        p:last-child:not(:only-child) {
            margin-left: 20px;

            span {
                color: #222;
                font-size: 1.1em;
                font-weight: bolder;

                background-color: #e4e40c;
                margin-left: 5px;
                padding: 2px 8px;
            }
        }

        .link {

            &:hover {
                color: #cecece;

                cursor: pointer;
                transform: scale(1.1);
                transition: .2s ease-in;
            }
        }
    }
`;