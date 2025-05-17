import styled from "styled-components";
import sliderImg1 from "./../../../../assets/img/sliderImg1.jpg";
import {Icon} from "../../../../components/Icon/Icon";
import {Theme} from "../../../../styles/Theme";

export const Slide = () => {
    return (
        <StyledSlide>
            <SlidePhoto src={sliderImg1}/>
            <SlideWrapper>
                <Icon iconId={"dubbleQuotes"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                <SlideText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                    ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent
                </SlideText>
                <LinkWrapper>
                    <SlideLinkLeft>
                        <Icon iconId={"arrowLeft"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                    </SlideLinkLeft>
                    <SlideLinkRight>
                        <Icon iconId={"arrowRight"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                    </SlideLinkRight>
                </LinkWrapper>
            </SlideWrapper>
        </StyledSlide>
    );
};

const StyledSlide = styled.div`
    display: flex;
    width: 100%;
    max-width: 894px;
    
    @media screen and (max-width: 920px) {
        flex-direction: column;
    }
    
    @media ${Theme.media.tablet} {
        gap: 25px;
    }
`

const SlidePhoto = styled.img`
    max-width: 390px;
    height: 392px;
    object-fit: cover;
    
    @media ${Theme.media.tablet} {
        margin-bottom: 10px;
    }
`

const SlideText = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 180%;
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

const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    
    @media ${Theme.media.tablet} {
        padding: 0px;
        gap: 20px;
    }
`

const LinkWrapper = styled.div`
    display: flex;
    padding: 10px;
    
`