import Paragraph from "../paragraph";
import Title from "../title";
import Image from "../image";
import { ContentDiv, MainDiv, BlogLink } from "./styles";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

interface Props {
    blogpost: string;
    disabled?: boolean;
}

const BlogPost = (props: Props) => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    const { blogpost, disabled } = props;

    return (
        <>
            <MainDiv>
                <ContentDiv>
                    <Title isFeaturedBlogPostTitle content={t(blogpost + "Title")} />
                    <Image
                        disabled={disabled}
                        isBlogPostPicture
                        blogpost={blogpost}
                        src={t(blogpost + "LogoSrc")}
                        alt={t(blogpost + "LogoAlt")}
                    />
                    <Paragraph isSmallParagraph content={t(blogpost + "SmallRecap")} />
                    {disabled ? (
                        <BlogLink className="disabled ">{t("featuredBlogpostsDisabled")}</BlogLink>
                    ) : (
                        <Link href={{ pathname: "/blogpost/" + blogpost, query: query }}>
                            <BlogLink>{t("featuredBlogpostsCTA")}</BlogLink>
                        </Link>
                    )}
                </ContentDiv>
            </MainDiv>
        </>
    );
};

export default BlogPost;
