import styled from "styled-components";
import sliderImg1 from "./../../../../assets/img/sliderImg1.jpg";
import {FlexWrapper} from "./../../../../components/FlexWrapper";
import {Icon} from "../../../../components/Icon/Icon";

export const Slide = () => {
    return (
        <StyledSlide>
            <SlidePhoto src={sliderImg1}/>
            <FlexWrapper direction="column" padding={"10px"}>
                <DoubleQuotes>“</DoubleQuotes>
                <SlideText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                    ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent
                </SlideText>
                <FlexWrapper padding={"10px"}>
                    <SlideLinkLeft>
                        <Icon iconId={"arrowLeft"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                    </SlideLinkLeft>
                    <SlideLinkRight>
                        <Icon iconId={"arrowRight"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                    </SlideLinkRight>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSlide>
    );
};

const StyledSlide = styled.div`
    display: flex;
    width: 894px;
    max-width: 894px;
    min-height: 394px;
`

const SlidePhoto = styled.img`
    width: 390px;
    height: 390px;
    object-fit: cover;
`

const DoubleQuotes = styled.span`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 100px;
    line-height: 120%;
    letter-spacing: 0%;

`

const SlideText = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 180%;
    letter-spacing: 0%;
`

const SlideLinkLeft = styled.a`
    display: inline-block;
    padding: 10px;
    :hover {
        cursor: pointer;
    }
`

const SlideLinkRight = styled.a`
    display: inline-block;
    padding: 10px;
    :hover {
        cursor: pointer;
    }
`