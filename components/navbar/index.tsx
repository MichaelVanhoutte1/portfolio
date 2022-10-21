import Link from "next/link";
import { Button, NavbarDiv, ContentDiv, Name, NameDiv } from "./styles";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import cs from "classnames";
import BurgerMenu from "../user-interface/burger-menu";
import { useState } from "react";

const NavbarComponent = () => {
    const router = useRouter();
    let isHomepage: boolean = router.pathname === "/";
    const [ isMenuActive , setIsMenuActive ] = useState(false)

    return (
        <>
            <NavbarDiv className={cs({ homepage: isHomepage })}>
                <NameDiv>
                    <Link href="/">
                        <Name>Michael Vanhoutte</Name>
                    </Link>
                </NameDiv>
                <BurgerMenu isMenuActive={isMenuActive} toggleMenuFunction={setIsMenuActive}/>
                <ContentDiv className={cs({ menuActivated: isMenuActive })}>
                    <Link href="/about">
                        <Button>about</Button>
                    </Link>
                    {isHomepage ? (
                        <>
                            <ScrollLink to="blog" smooth duration={1000}>
                                <Button>blog</Button>
                            </ScrollLink>
                            <ScrollLink to="projects" smooth duration={1000}>
                                <Button>projects</Button>
                            </ScrollLink>
                            <ScrollLink to="contact" smooth duration={1000}>
                                <Button>contact</Button>
                            </ScrollLink>
                        </>
                    ) : (
                        <>
                            <Link href="/#blog">
                                <Button>blog</Button>
                            </Link>
                            <Link href="/#projects">
                                <Button>projects</Button>
                            </Link>
                            <Link href="/#contact">
                                <Button>contact</Button>
                            </Link>
                        </>
                    )}
                </ContentDiv>
            </NavbarDiv>
        </>
    );
};

export default NavbarComponent;
