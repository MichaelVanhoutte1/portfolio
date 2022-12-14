import styled from "styled-components";
import { breakpoints } from "../../../styles/variables.styled";
export const Paragraph = styled.p`
    width: clamp(300px, 100%, 800px);
    font-size: 1.5rem;
    line-height: initial;
    text-align: justify;
    &.aboutMe{
        font-weight: 200;
        font-size: 1.4rem;
    }
    &.withMargin {
        margin: 0 0 2rem 0;
    }
    &.smallParagraph {
        width: 230px;
        font-weight: 300;
        font-size: 1.3rem;
        margin: 2rem 0 0 0;
        text-align: left;
    }
    @media (min-width: ${breakpoints.md}) {
        width: clamp(450px, 100%, 800px);
        &.largeParagraph {
            width: clamp(450px, 100%, 1000px);
            font-weight: 200;
            font-size: 1.4rem;
        }
    }
    span {
        font-weight: 500;
    }
`;
