import styled from 'styled-components';

interface NavbarProps {
    image: String,
    scrolled: Boolean
}

export const Navbar = styled.nav<NavbarProps>`
    font-family: sans-serif;
    align-items: center;
    background: ${props => props.scrolled
        ? '#141414'
        : '#1c1e2280'
    };
    display: flex;
    height: 8vh;
    margin-bottom: 7vw;
    padding-left: 2vw;
    position: fixed;
    transition: .5s ease-in;
    width: -webkit-fill-available;
    z-index: 2;

    a {
        text-decoration: initial;

        margin: auto 10px;
    }
    a, a:visited {
        color: #fff;
    }
    a:hover:not(.scrolled) {
        color: #686868;
        transform: scale(1.1);
        transition: .2s ease-in-out;
    }
    a.scrolled:hover {
        color: #cecece;
    }
    a:first-child {
        background: ${props => `url(${props.image})`} no-repeat center;
        background-size: contain;
        width: 6vw;
        height: 4vh;
        margin-right: 3vw;
    }
`;