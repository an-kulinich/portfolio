import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {ExperienceCount} from "./experienceCount/ExperienceCount";
import {ExperienceItems} from "./experienceItems/ExperienceItems";

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <FlexWrapper justify="space-between">
                    <ExperienceCount/>
                    <ExperienceItems/>
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

