import styled from 'styled-components';

interface ICard {
    image?: string,
    fontSize?: string,
    paddingTop?: string,
    bgColor?: string,
    width?: string,
    bShadow?: boolean,
    border?: string,
    main?: boolean
}

export const CardWallpapper = styled.div<ICard>`
    overflow: visible;
    background: ${props => `url(${props.image})`} no-repeat center;
    background-size: cover;
    box-shadow: inset 0px -42px 36px -8px #1b1b1b, 0 42px 36px 8px #1b1b1b;
    height: 55vh;
    position: absolute;
    top: 0;
    width: -webkit-fill-available;
`;

export const CardContainer = styled.div<ICard>`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: ${props => props.paddingTop};
`;

export const CardBoxContainer = styled.div<ICard>`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: ${props => !props.main ? '45vh' : 0};
    width: -webkit-fill-available;
`;

export const CardTitle = styled.h1<ICard>`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${props => `${props.fontSize}em`};

    margin-bottom: 5vh;
`;

export const CardBox = styled.div<ICard>`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 2vh 1vw;
    opacity: ${props => props.main ? 0.5 : 1};
    width: ${props => `${props.width}`};

    &:hover {
        opacity: ${props => props.main ? 1 : 1};
        transform: ${props => !props.bShadow ? 'scale(1.2, 1.5)' : ''};
        transition: .2s ease-in;
    }

    @media (max-width: 768px) {
        width: 40vw;
    }
`;

export const Card = styled.div<ICard>`
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

    @media (max-width: 768px) {
        width: 40vw;
    }
`;

export const CardDescription = styled.div<ICard>`
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

    .area-button, .area-info, .area-tags{
        align-items: center;
        display: flex;

        &:not(:last-child) {
            margin-bottom: 10px;
        }

        .button, .info, .tag {
            margin: 5px 10px;
        }
    }

    .area-button {
        justify-content: flex-start;

        .button {
            align-items: center;
            border-radius: 15px;
            box-shadow: 0px 0px 3px 1px #ccc6;
            cursor: pointer;
            display: flex;
            height: 30px;
            justify-content: center;
            width: 33px;

            :last-child {
                margin-left: auto;
            }
            img {
                height: 10px;
                width: 10px;
            }
        }
    }

    .area-info {
        flex-wrap: wrap;

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
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        
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