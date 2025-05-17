import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Avatar from "./../../../assets/img/photo.jpg"
import {Icon} from "../../../components/Icon/Icon";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <Name>
                        Hello! <br/>
                        I’m Zarror Nibors
                    </Name>
                    <DescriptionWrapper>
                        <DescriptionText>
                            I’am freelance <span>web developer</span> based in Indonesia who loves to craft attractive design
                            experiences for the web.
                        </DescriptionText>
                        <FlexWrapper>
                            <EmailBtn>
                                <Icon iconId={"mail"} width={"25px"} height={"25px"} viewBox={"0 0 21 21"}/>
                                Email me
                            </EmailBtn>
                            <DownloadBtn>
                                <Icon iconId={"download"} width={"25px"} height={"25px"} viewBox={"0 0 21 21"}/>
                                Download CV
                            </DownloadBtn>
                        </FlexWrapper>
                    </DescriptionWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background-color: ${Theme.colors.primaryBg};
    background-image: url(${Avatar});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: 100% 50%;
    padding-top: 185px;
    padding-bottom: 135px;

    @media ${Theme.media.mobile} {
        background-position: 100% -20%;
        background-size: 100% auto;
        min-height: 970px;
        align-items: flex-end;
        padding-bottom: 70px;
    }
`

const Name = styled.span`
    ${font({family: "'Playfair Display', sans serif", weight: 700, lineHeight: 120, Fmax: 90, Fmin: 50})};
`

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 404px;
    min-height: 202px;
    gap: 30px;
`

const DescriptionText = styled.p`
    ${font({family: "'Poppins', sans serif", weight: 400, lineHeight: 180, Fmax: 20, Fmin: 16})};
    color: #a6a6a6;

    span {
        color: ${Theme.colors.font};
    }
`

const EmailBtn = styled.button`
    width: 200px;
    max-width: 200px;
    min-height: 64px;
    ${font({family: "'Poppins', sans serif", weight: 400, lineHeight: 180, Fmax: 20, Fmin: 16})};
    color: ${Theme.colors.font};
    background-color: ${Theme.colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-wrap: nowrap;
    cursor: pointer;
`

const DownloadBtn = styled.button`
    width: 200px;
    max-width: 200px;
    min-height: 64px;
    ${font({family: "'Poppins', sans serif", weight: 400, lineHeight: 180, Fmax: 20, Fmin: 16})};
    color: ${Theme.colors.font};
    text-decoration: underline 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-wrap: nowrap;
    cursor: pointer;
`