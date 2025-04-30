import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ExperienceItem} from "./experienceItem/ExperienceItem";
import {BigNumber} from "../../../components/number/BigNumber";
import {Container} from "../../../components/Container";

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <FlexWrapper>
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
                </FlexWrapper>
            </Container>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    width: 100%;
    min-height: 660px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222A36;
`

const YearText = styled.p`

`

const ExperienceTitle = styled.h2`
    width: 100%;
    text-align: center;
`