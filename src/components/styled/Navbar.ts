import styled from 'styled-components';

interface NavbarProps {
    image: string;
}

export const Navbar = styled.nav<NavbarProps>`
    font-family: sans-serif;

    align-items: center;
    background: rgba(0, 0, 0, .3);
    display: flex;
    height: 8vh;
    margin-bottom: 7vw;
    padding-left: 2vw;
    position: fixed;
    width: -webkit-fill-available;
    z-index: 2;

    a {
        text-decoration: initial;

        margin: auto 10px;
    }
    a, a:visited {
        color: #fff;
    }
    a:hover {
        color: #686868;
        transform: scale(1.1);
        transition: .2s ease-in-out;
    }
    a:first-child {
        background: ${props => `url(${props.image})`} no-repeat center;
        background-size: contain;
        width: 6vw;
        height: 4vh;
        margin-right: 3vw;
    }
`;