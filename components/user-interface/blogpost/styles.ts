import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables.styled";
export const MainDiv = styled.div`
    max-width: 1000px;
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BlogLink = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${colors.secondary};
    margin: 3rem 0;
    width: fit-content;
    cursor: pointer;
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
