import styled from "styled-components";
import {Container} from "../../../components/Container";
import {ExperienceCount} from "./experienceCount/ExperienceCount";
import {ExperienceItems} from "./experienceItems/ExperienceItems";
import {Theme} from "../../../styles/Theme";

export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
                <ExperienceWrapper>
                    <ExperienceCount/>
                    <ExperienceItems/>
                </ExperienceWrapper>
            </Container>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colors.thirdBg};
`

const ExperienceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media ${Theme.media.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`

