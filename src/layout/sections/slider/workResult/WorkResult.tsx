import styled from "styled-components";
import {BigNumber} from "../../../../components/number/BigNumber";
import {Theme} from "../../../../styles/Theme";

export const WorkResult = () => {
    return (
        <StyledWorkResult>

            <WorkResultText>
                Satisfaction Clients
            </WorkResultText>

            <WorkResultNumber as={BigNumber} >
                100 %
            </WorkResultNumber>

            <WorkResultText>
                Clients On Worldwide
            </WorkResultText>

            <WorkResultNumber as={BigNumber} >
                + 80
            </WorkResultNumber>

            <WorkResultText>
                Projects Done
            </WorkResultText>

            <WorkResultNumber as={BigNumber} >
                743
            </WorkResultNumber>
        </StyledWorkResult>
    );
};

const StyledWorkResult = styled.div`
    width: 100%;
    max-width: 194px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    @media ${Theme.media.tablet} {
        padding-left: 10px;
    }
`

const WorkResultText = styled.span`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 120%;
`

const WorkResultNumber = styled.span`
    font-weight: 700;
    font-size: 50px;
    line-height: 120%;
`