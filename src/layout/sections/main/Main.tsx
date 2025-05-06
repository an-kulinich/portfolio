import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Avatar from "./../../../assets/img/photo.jpg"
import {Icon} from "../../../components/Icon/Icon";


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
    min-height: 744px;
    background-color: #222A36F2;
    background-image: url(${Avatar});
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: 100% 50%;
`

const Name = styled.span`
    font-family: "Playfair Display";
    font-weight: 700;
    font-size: 90px;
    line-height: 120%;
    letter-spacing: 0%;

`

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 404px;
    max-width: 404px;
    min-height: 202px;
    gap: 30px;
`

const DescriptionText = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 180%;
    letter-spacing: 0%;
    color: #a6a6a6;
    
    span {
        color: white;
    }
`

const EmailBtn = styled.button`
    width: 200px;
    max-width: 200px;
    min-height: 64px;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0%;
    color: white;
    background-color: #676CDB;
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
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0%;
    color: white;
    text-decoration: underline 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-wrap: nowrap;
    cursor: pointer;
`