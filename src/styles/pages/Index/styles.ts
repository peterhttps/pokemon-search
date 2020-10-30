import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.colors.boxColor};
    padding: 6em;

    & h1 {
        font-size: 2.5em;
        text-align: center;
    }

    & span {
        background: ${props => props.theme.colors.primary};
        color: white;
    }

    & input {
        margin-top: 3em;
        font-size: 1.2em;
        padding: .7em .5em;
        border: none;
    }

    & a {
        margin-top: 1em;
        padding: .5em .5em;
        background: white;
        text-align: center;
        text-decoration: none;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.primary};
        font-weight: 500;
        transition: .3s;
    }

    & a:hover {
        background: ${props => props.theme.colors.primaryHover};
        color: ${props => props.theme.colors.textHover};
    }
    
    @media only screen and (max-width: 900px) {
        padding: 18% 10%;

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

