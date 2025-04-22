import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import Avatar from "./../../../assets/img/photo.jpg"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <Name>
                        Hello!
                        I’m Zarror Nibors
                    </Name>
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
                <Photo src={Avatar} alt="Photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`

`

const Name = styled.span`

`

const Description = styled.p`

`

const EmailBtn = styled.button`
    max-width: 200px;
    padding: 20px 40px;
`

const DownloadBtn = styled.button`
    max-width: 200px;
    padding: 10px 20px;
`

const Photo = styled.img`
    width: 50%;
`