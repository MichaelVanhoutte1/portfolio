import styled from "styled-components";
export const HeroSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 0px;
    background: $white-color;
    font-weight: 400;
    color: $dark-blue-text;
    padding: 0rem 5.6rem;
    margin-bottom: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    // If you want to set a background image on the hero section, uncomment these with yout custom image

    /* background: url("/src/assets/[your-image].png");
    background-position: center;
    background-size: cover; */

    @include respond(phone) {
        padding: 0rem $default-font-size;
    }

    .hero-title {
        font-size: 5.6rem;
        font-weight: 700;
        margin-bottom: 3.2rem;
        text-align: left;

        @include respond(tab-land) {
            font-size: 4rem;
        }
        @include respond(tab-port) {
            font-size: 3.6rem;
            text-align: center;
        }
        @include respond(phone) {
            font-size: 3.5rem;
            line-height: 1.5;
        }
        @include respond(phone-xs) {
            font-size: 2.8rem;
        }
    }

    .hero-cta {
        display: flex;

        @include respond(tab-port) {
            justify-content: center;
        }

        & a {
            font-size: 2.4rem;

            @include respond(phone) {
                font-size: 2rem;
            }
        }
    }
`;
