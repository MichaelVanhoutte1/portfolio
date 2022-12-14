import BoxLabels from "../box-labels";
import Button from "../button";
import Paragraph from "../paragraph";
import Title from "../title";
import Image from "../image";
import { ContentDiv, MainDiv } from "./styles";
import { useTranslation } from "next-export-i18n";

interface Props {
    project: string;
    stackTags: string[];
    disabled?: boolean;
}

const ProjectComponent = (props: Props) => {
    const { t } = useTranslation();
    const { project, stackTags, disabled } = props;
    return (
        <>
            <MainDiv>
                <ContentDiv>
                    <Title isProjectSubtitle content={t(project + "Type")} />
                    <Title isProjectTitle content={t(project + "Title")} />
                    <BoxLabels isProjectLabelDiv labelArray={stackTags} />
                    <Paragraph content={t(project + "Summary")} />
                    <Button
                        disabled={disabled}
                        href={"/project/" + project}
                        isProjectButton
                        content={t(disabled ? "projectDisabled" : "projectCTA")}
                    />
                </ContentDiv>
                <Image
                    disabled={disabled}
                    isProjectClickbait
                    project={project}
                    src={t(project + "Src")}
                    alt={t(project + "Alt")}
                />
            </MainDiv>
        </>
    );
};

export default ProjectComponent;
