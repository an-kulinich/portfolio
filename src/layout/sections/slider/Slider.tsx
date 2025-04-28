import styled from "styled-components";
import {Slide} from "./slide/Slide";
import {WorkResult} from "./workResult/WorkResult";


export const Slider = () => {
    return (
        <StyledSlider>
            <Slide/>
            <WorkResult/>
        </StyledSlider>
    );
};

const StyledSlider = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
`

