import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ExperienceItem} from "./experienceItem/ExperienceItem";

export const ExperienceItems = () => {
    return (
        <StyledExperienceItems>
            <ExperienceTitle>Developer and Designer, specialized in UI/UX and Web Developer</ExperienceTitle>
            <FlexWrapper align={"flex-end"} wrap={"wrap"} gap={"15px"}>
                <ExperienceItem iconId={"computer"} experienceText={"Front End Developer"}/>
                <ExperienceItem iconId={"paint"} experienceText={"UI/UX Designer"}/>
                <ExperienceItem iconId={"thunder"} experienceText={"Branding Designer"}/>
            </FlexWrapper>
        </StyledExperienceItems>
    );
};

const StyledExperienceItems = styled.div`
    width: 894px;
    max-width: 894px;
    min-height: 460px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ExperienceTitle = styled.h2`
    width: 100%;
    text-align: center;
`