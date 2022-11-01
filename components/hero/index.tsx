import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { HeroSection } from "./styled";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

const Header = () => {
    const { t } = useTranslation();
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }, []);

    return (
        <HeroSection>
            <>
                <Fade direction={isDesktop ? "left" : "up"} duration={1000} delay={250}>
                    <h1 className="hero-title">{t("heroTitle")}</h1>
                </Fade>
                <Fade direction={isDesktop ? "left" : "up"} duration={1000} delay={750}>
                    <Link to="about" smooth duration={1000}>
                        <p className="hero-cta">
                            <span className="cta-btn cta-btn--hero">{t("heroCTA")}</span>
                        </p>
                    </Link>
                </Fade>
            </>
        </HeroSection>
    );
};

export default Header;
