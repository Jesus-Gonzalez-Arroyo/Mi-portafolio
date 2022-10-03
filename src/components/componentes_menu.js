import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    height: 100vh;
    left: ${({open}) => open ? '0' : '-100%'};
    position: absolute;
    background: #222831;
    transition: all 1s;
`;

export const Ul = styled.ul`
    width: 50%;
    margin: 25vh auto;
    padding: 0;
    text-align: center;
`;

export const Li = styled.li`
    width: 100%;
    margin: 120px 0;
    list-style: none;
`;

export const A = styled.a`
    width: 100%;
    text-decoration: none;
    font-size: 25px;
    font-family: Segoe UI;
    color: #fff;
`;

export const Containermenu = styled.div`
    width: 90%;
    margin: 17px 0 15px 15px;
    padding: 0;
    display: none;

    @media screen and (max-width: 600px){
        display: block;
    }
`;

