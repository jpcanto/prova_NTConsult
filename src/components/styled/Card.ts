import styled from 'styled-components';

interface cardProps {
    image?: string,
    fontSize?: string,
    paddingTop?: string,
    bgColor?: string,
    width?: string,
    bShadow?: boolean,
    border?: string,
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
    flex-wrap: wrap;
    justify-content: center;
    width: -webkit-fill-available;
`;

export const CardTitle = styled.h1<cardProps>`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${props => `${props.fontSize}em`};

    margin-bottom: 5vh;
`;

export const CardBox = styled.div<cardProps>`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 2vh 1vw;
    width: ${props => `${props.width}`};

    &:hover {
        transform: ${props => !props.bShadow ? 'scale(1.2, 1.5)' : ''};
        transition: .2s ease-in;
    }
`;

export const Card = styled.div<cardProps>`
    background: ${props => `${props.bgColor ? props.bgColor : ''} url(${props.image})`} no-repeat center;
    background-size: cover;
    border-radius: ${props => props.border === 'full' ? '5px' : '0'};
    border-top-left-radius: ${props => props.border === 'top' ? '5px' : '0'};
    border-top-right-radius: ${props => props.border === 'top' ? '5px' : '0'};
    cursor: pointer;
    display: flex;
    flex-direction: column-reverse;
    height: 22vh;
    width: ${props => `${props.width}`};

    &:hover {
        box-shadow: ${props => props.bShadow ? 'inset 0px 0px 0px 3px #fff' : ''};
        + .title {
            color: #fff;
        }
    }

    + .title {
      color: grey;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.2em;

      margin-top: 10px;
    }
`;

export const CardDescription = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .7em;
    font-weight: bold;

    background: #171717;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 3px 6px -1px #333;
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: -webkit-fill-available;

    .area-buttons, .area-info, .area-tags{
        align-items: center;
        display: flex;

        &:not(:last-child) {
            margin-bottom: 10px;
        }

        .button, .info, .tag {
            margin: 5px 10px;
        }
    }

    .area-info {
        .info {
            &:first-child {
                color: #29d429;
            }

            span {
                color: #222;
                font-size: 1.1em;
                font-weight: bolder;

                background-color: #e4e40c;
                margin-left: 5px;
                padding: 2px 8px;
            }
        }
    }

    .area-tags {
        display: flex;
        align-items: center;
        .tag:not(:first-child)::before {
            background: #4d4d4d;
            border-radius: 2px;
            content: '';
            display: inline-block;
            height: 4px;
            margin-right: 10px;
            width: 4px;
        }
    }
`;