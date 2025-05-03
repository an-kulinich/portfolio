import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Avatar from "./../../../assets/img/photo.jpg"


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <Name>
                        Hello! <br/>
                        I’m Zarror Nibors
                    </Name>
                    <FlexWrapper direction={"column"} width={"404px"} maxWidth={"404px"} minHeight={"202px"} gap={"30px"}>
                        <Description>
                            I’am freelance web developer based in Indonesia who loves to craft attractive design
                            experiences for the web.
                        </Description>
                        <FlexWrapper>
                            <EmailBtn>
                                Email me
                            </EmailBtn>
                            <DownloadBtn>
                                Download CV
                            </DownloadBtn>
                        </FlexWrapper>
                    </FlexWrapper>
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

const Description = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 180%;
    letter-spacing: 0%;

`

const EmailBtn = styled.button`
    width: 200px;
    max-width: 200px;
    min-height: 64px;
    padding: 20px 40px;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0%;
    color: white;
    background-color: #676CDB;

`

const DownloadBtn = styled.button`
    width: 200px;
    max-width: 200px;
    min-height: 64px;
    padding: 20px 40px;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0%;
    color: white;
    text-decoration: underline 1px solid white;
`

const Photo = styled.img`
    width: 50%;
`