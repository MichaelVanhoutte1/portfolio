import styled from "styled-components";
import { breakpoints, colors } from "../variables.styled";

export const MainDiv = styled.div`
    margin: -13rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    @media (min-width: ${breakpoints.md}) {
        margin: 0 auto 5rem auto;
        min-height: calc(100vh - 23.95rem);
    }
`;

export const BlogPost = styled.div``;

export const BlogTitle = styled.h1`
    font-size: 2rem;
    margin: 3rem 0 1rem 0;
    font-weight: 500;
    cursor: pointer;
    color: ${colors.secondary};
    transition: filter 0.2s ease-in-out;
    @media (min-width: ${breakpoints.md}) {
        &:hover {
            filter: brightness(80%);
        }
    }

    &.disabled {
        color: ${colors.disabled};
        cursor: default;
        &:hover {
            filter: brightness(100%);
        }
    }
`;
