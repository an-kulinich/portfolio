import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {ExperienceItem} from "./experienceItem/ExperienceItem";

export const ExperienceItems = () => {
    return (
        <StyledExperienceItems>
            <ExperienceTitle>Developer and Designer, specialized in UI/UX and Web Developer</ExperienceTitle>
            <ExperienceItemWparrer>
                <ExperienceItem iconId={"computer"} experienceText={"Front End Developer"}/>
                <ExperienceItem iconId={"paint"} experienceText={"UI/UX Designer"}/>
                <ExperienceItem iconId={"thunder"} experienceText={"Branding Designer"}/>
            </ExperienceItemWparrer>
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
    gap: 15px;
`

const ExperienceTitle = styled.h2`
    width: 100%;
    font-weight: 700;
    font-size: 40px;
    line-height: 180%;
    letter-spacing: 0%;
    text-align: center;

`

const ExperienceItemWparrer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;
`