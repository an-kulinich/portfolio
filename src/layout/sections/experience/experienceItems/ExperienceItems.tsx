import styled from "styled-components";
import {ExperienceItem} from "./experienceItem/ExperienceItem";
import {Theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

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
    width: 100%;
    max-width: 894px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media ${Theme.media.tablet} {
        
    }
`

const ExperienceTitle = styled.h2`
    width: 100%;
    text-align: center;
    ${font({weight: 700, lineHeight: 180, Fmax: 40, Fmin: 24})};
`

const ExperienceItemWparrer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;

    @media ${Theme.media.tablet} {
        flex-direction: column;
        gap: 25px;
    }

    @media ${Theme.media.mobile} {
        flex-direction: column;
        gap: 25px;
    }
    
`