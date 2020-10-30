import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    flex: 1;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 900px) {
        height: 100%;

    }
`;

export const PokemonBox = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.boxColor};

    width: 600px;
    padding: 2em;
    & img {
        width: 50%;
        align-self: center;
    }

    & span {
        background: ${props => props.theme.colors.background};
        text-align: center;
        padding: .5em;
        width: 50%;
        margin: auto;
        font-weight: bold;

    }

    & h1 {
        text-align: center;
        margin: 1em;
    }
    
    @media only screen and (max-width: 900px) {

        & h1 {
            font-size: 2em;
        }

        & input {
            font-size: 1em;
        }

        & a { 
            font-size: .9em;
        }
    }

`;

export const PokemonStats = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 1em;

    & div {
        background: #111;
        margin: 1em;
        padding: 1em;
        min-height: 6em;;
        flex: 1 0 21%; /* explanation below */
    }

    & h3 {
        font-size: .9em;
        font-weight: 400;
    }

    & p {
        font-size: 2em;
        text-align: center;
        padding-top: .25em;
        font-weight: bold;
    }

    @media only screen and (max-width: 900px) {
        & div {
            display: flex;
            width: 100%;
            flex: 1 0 100%;
            justify-content: space-between;
            padding: 1em 1.5em;
        }

        & p {
            padding-top: .5em;
        }

        
    }

`;

export const PokemonTypes = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 3em;
    margin-top: 2em;

    @media only screen and (max-width: 900px) {
        & {
            padding: 0;
        }
    }
`;

export const PokemonColors = styled.div`
    background: ${props => props.color};
    padding: 1em 2em;
    font-size: 1em;
`;

