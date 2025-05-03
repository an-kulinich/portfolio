import styled from "styled-components";
import {BigNumber} from "../../../../components/number/BigNumber";

export const ExperienceCount = () => {
    return (
        <StyledExperienceCount>
            <BigNumber>4+</BigNumber>
            <YearText>Years Experience Working</YearText>
        </StyledExperienceCount>
    );
};

const StyledExperienceCount = styled.div`
    width: 210px;
    max-width: 210px;
    min-height: 336px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const YearText = styled.p`
    font-family: "Playfair Display";
    font-weight: 700;
    font-size: 40px;
    line-height: 180%;
    letter-spacing: 0%;

`