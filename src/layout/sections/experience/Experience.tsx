import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ExperienceItem} from "./experienceItem/ExperienceItem";
import {BigNumber} from "../../../components/number/BigNumber";

export const Experience = () => {
    return (
        <StyledExperience>
            <FlexWrapper direction={"column"}>
                <BigNumber>4+</BigNumber>
                <YearText>Years Experience Working</YearText>
            </FlexWrapper>
            <FlexWrapper direction={"column"}>
                <ExperienceTitle>Developer and Designer, specialized in UI/UX and Web Developer</ExperienceTitle>
                <FlexWrapper justify={"space-between"} align={"flex-end"}>
                    <ExperienceItem iconId={"computer"} experienceText={"Front End Developer"}/>
                    <ExperienceItem iconId={"paint"} experienceText={"UI/UX Designer"}/>
                    <ExperienceItem iconId={"thunder"} experienceText={"Branding Designer"}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    background-color: #222A36;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`

const YearText = styled.p`

`

const ExperienceTitle = styled.h2`
    width: 100%;
    text-align: center;
`