import styled from "styled-components";
import {Slide} from "./slide/Slide";
import {WorkResult} from "./workResult/WorkResult";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <Container>
                <SliderWrapper>
                    <Slide/>
                    <WorkResult/>
                </SliderWrapper>
            </Container>
        </StyledSlider>
    );
};

const StyledSlider = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Theme.colors.primaryBg};
    
    @media ${Theme.media.tablet} {
        padding-top: 40px;
        padding-bottom: 90px;
    }
`

const SliderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media ${Theme.media.mobile} {
        flex-direction: column;
    }
`

