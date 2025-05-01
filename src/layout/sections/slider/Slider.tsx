import styled from "styled-components";
import {Slide} from "./slide/Slide";
import {WorkResult} from "./workResult/WorkResult";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Slider = () => {
    return (
        <StyledSlider>
            <Container>
                <FlexWrapper justify="space-between">
                    <Slide/>
                    <WorkResult/>
                </FlexWrapper>
            </Container>
        </StyledSlider>
    );
};

const StyledSlider = styled.section`
    width: 100%;
    min-height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222A36F2;
`

