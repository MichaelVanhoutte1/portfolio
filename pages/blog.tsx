import type { NextPage } from "next";
import Paragraph from "../components/user-interface/paragraph";
import { MainDiv, BlogPost, BlogTitle } from "../styles/pages/blog.styled";
import Title from "../components/user-interface/title";
import SEO from "../components/seo";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import { Fade } from "react-awesome-reveal";

const Blog: NextPage = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <>
            <SEO
                title="Blog"
                description="Read my blog posts."
                name="Michael Vanhoutte"
                type="website"
            />
            <Fade triggerOnce>
                <MainDiv>
                    <BlogPost>
                        <Link href={{ pathname: "/blogpost/spinaker", query: query }}>
                            <BlogTitle>{t("spinakerTitle")}</BlogTitle>
                        </Link>
                        <Title isBlogPostDate content={t("spinakerDate")} />
                        <Paragraph isLargeParagraph content={t("spinakerRecap")} />
                    </BlogPost>
                    <BlogPost>
                        <Link href={{ pathname: "/blogpost/commonEurope", query: query }}>
                            <BlogTitle>{t("commonEuropeTitle")}</BlogTitle>
                        </Link>
                        <Title isBlogPostDate content={t("commonEuropeDate")} />
                        <Paragraph isLargeParagraph content={t("commonEuropeRecap")} />
                    </BlogPost>
                    <BlogPost>
                        <Link href={{ pathname: "/blogpost/cloudResume", query: query }}>
                            <BlogTitle>{t("cloudResumeTitle")}</BlogTitle>
                        </Link>
                        <Title isBlogPostDate content={t("cloudResumeDate")} />
                        <Paragraph isLargeParagraph content={t("cloudResumeRecap")} />
                    </BlogPost>
                </MainDiv>
            </Fade>
        </>
    );
};

export default Blog;
