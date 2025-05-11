import styled from "styled-components";
import {BigNumber} from "../../../../components/number/BigNumber";
import {Theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

export const ExperienceCount = () => {
    return (
        <StyledExperienceCount>
            <BigNumber>4 +</BigNumber>
            <YearText>Years Experience Working</YearText>
        </StyledExperienceCount>
    );
};

const StyledExperienceCount = styled.div`
    width: 100%;
    max-width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    @media ${Theme.media.tablet} {
        flex-direction: row;
        align-items: center;
        gap: 50px;
    }
`

const YearText = styled.p`
    ${font({family: "'Playfair Display', sans serif", weight: 700, lineHeight: 180, Fmax: 40, Fmin: 26})};
`