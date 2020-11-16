import styled from 'styled-components';
import { INotFound } from './NotFound.interface';

export const NotFoundContainer = styled.div<INotFound>`
    background: ${props => `url(${props.image})`} no-repeat center;
    background-size: contain;
    height: 100%;
    position: absolute;
    width: 100%;
`;