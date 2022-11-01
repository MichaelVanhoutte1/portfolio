import Paragraph from "../paragraph";
import Title from "../title";
import Image from "../image";
import { ContentDiv, MainDiv, BlogLink } from "./styles";
import Link from "../link";
import { useTranslation } from "next-i18next";

interface Props {
    blogpost: string;
}

const BlogPost = (props: Props) => {
    const { t } = useTranslation();
    const { blogpost } = props;

    return (
        <>
            <MainDiv>
                <ContentDiv>
                    <Title isFeaturedBlogPostTitle content={t(blogpost + "Title")} />
                    <Image
                        isBlogPostPicture
                        blogpost={blogpost}
                        src={t(blogpost + "LogoSrc")}
                        alt={t(blogpost + "LogoAlt")}
                    />
                    <Paragraph isSmallParagraph content={t(blogpost + "SmallRecap")} />
                    <Link href="/blogpost">
                        <BlogLink>{t("featuredBlogpostsCTA")}</BlogLink>
                    </Link>
                </ContentDiv>
            </MainDiv>
        </>
    );
};

export default BlogPost;
