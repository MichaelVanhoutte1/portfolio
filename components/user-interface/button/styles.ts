import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables.styled";

export const Button = styled.button`
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    width: 15rem;
    padding: 20px 40px 20px;
    outline: 0;
    margin: 2rem 2rem 2rem 0;
    color: ${colors.primaryText};
    border: 2px solid ${colors.primary};
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    @media (min-width: ${breakpoints.md}) {
        &:hover::after {
            top: 0px;
            left: 0px;
        }
    }
    &::after {
        content: "";
        background-color: ${colors.secondary};
        width: 100%;
        position: absolute;
        z-index: -1;
        height: 100%;
        top: -10px;
        left: -10px;
        transition: 0.3s;
    }
    a {
        text-decoration: none;
        color: ${colors.primaryText};
    }
    &.disabled {
        cursor: default;
        &::after {
            background-color: ${colors.disabled};
        }
        &:hover::after {
            top: -10px;
            left: -10px;
        }
    }
`;
